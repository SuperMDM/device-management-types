import { JSZip } from 'https://deno.land/x/jszip/mod.ts';
import { parse } from 'jsr:@std/yaml';
import { assert } from 'https://deno.land/std@0.116.0/_util/assert.ts';
import { Formatter } from 'https://deno.land/x/deno_fmt@0.1.5/mod.ts';
import { emptyDirSync } from 'jsr:@std/fs';

// Download yaml types from https://github.com/apple/device-management/tree/release/mdm

const zipUrl =
    'https://github.com/apple/device-management/archive/refs/heads/release.zip';
// download zip file
const zipFile = await fetch(zipUrl);
const zipBuffer = await zipFile.arrayBuffer();
const zip = new JSZip();
await zip.loadAsync(zipBuffer);
// get the yaml files
const yamlFiles = Object.entries(zip.files()).filter(([path]) =>
    path.startsWith('device-management-release/mdm/c') &&
    path.endsWith('.yaml')
);

const map: Record<string, (zod: boolean) => string> = {
    '<string>': (z) => z ? 'z.string()' : 'string',
    '<boolean>': (z) => z ? 'z.boolean()' : 'boolean',
    '<date>': (z) => z ? 'z.date()' : 'Date',
    '<real>': (z) => z ? 'z.number()' : 'number',
    '<integer>': (z) => z ? 'z.number()' : 'number',
    '<data>': (z) => z ? 'z.string()' : 'string',
    '<any>': (z) => z ? 'z.any()' : 'any',
};

function checkKey(key: string) {
    if (key.includes(' ') || key.includes('-')) {
        return '"' + key + '"';
    }
    return key;
}

function checkOptional(key: { presence?: string; supportedOS?: object }, zod: boolean) {
    return (key.presence === 'optional' || key.supportedOS ? (zod ? '.optional()' : ' | undefined') : '')
}

function addSupportedOS(key: { supportedOS?: any }) {
    if (!key.supportedOS) {
        return '';
    }
    let out = "\n\n";
    for (const [name, data] of Object.entries<any>(key.supportedOS)) {
        out += `- ${name}: \n`;
        Object.keys(data).forEach((key) => {
            if (data[key] !== undefined) {
                out += `    - ${key}: ${JSON.stringify(data[key]).replaceAll("\"", "")}\n`;
            }
        });
        out += "\n";
    }
    return out;
}

function generateComment(key: { content: string, supportedOS?: object }, description?: string) {
    return '/** ' + (key.content ?? description ?? '').replaceAll("\n", "\n*") + addSupportedOS(key).replaceAll("\n", "\n*") + ' */\n';
}

function generateDict(
    zod: boolean,
    parsed: { key: string; type: string; presence?: string; subkeys?: any, content: string, supportedOS?: object }[],
) {
    let type = zod ? 'z.object({\n' : '{\n';
    for (const key of parsed) {
        type += generateComment(key);
        if (key.type === '<dictionary>') {
            type += checkKey(key.key) + ': ' + generateDict(zod, key.subkeys) +
                checkOptional(key, zod) + ',\n';
            continue;
        }
        if (key.type === '<array>') {
            type += checkKey(key.key) + ': ' + generateArray(zod, key) +
                checkOptional(key, zod) + ',\n';
            continue;
        }
        assert(map[key.type], `Type ${key.type} not found`);
        type += checkKey(key.key) + ': ' + map[key.type](zod) +
            checkOptional(key, zod) + ',\n';
    }
    type += zod ? '})' : '}';
    return type;
}

function generateArray(zod: boolean, parsed: any) {
    let type = zod ? 'z.array(' : 'Array<';
    const key = parsed.subkeys[0];
    if (key.type === '<dictionary>') {
        type += '\n' + generateDict(zod, key.subkeys) +
            checkOptional(key, zod) + '\n';
    } else {
        assert(map[key.type], `Type ${key.type} not found`);
        type += map[key.type](zod);
    }
    type += zod ? ')' : '>';
    return type;
}
try {
    emptyDirSync('generated/zod/');
    emptyDirSync('generated/ts/');
    emptyDirSync('generated/');
} catch (_) {
    console.log(_);
}
try {
    Deno.mkdirSync('generated', { recursive: true });
} catch (_e) {
    // ignore
}

try {
    Deno.mkdirSync('generated/zod', { recursive: true });
} catch (_e) {
    // ignore
}

try {
    Deno.mkdirSync('generated/ts', { recursive: true });
} catch (_e) {
    // ignore
}

const fmt = await Formatter.init({
    options: {
        indentWidth: 4,
        singleQuote: true,
    }
});

const names = [];
const out: Record<string, {ts: string[], zod: string[], info: {payload: boolean, response: boolean}}> = {};
for (const [path, file] of yamlFiles) {
    const data = await file.async('uint8array');
    const cnt = new TextDecoder().decode(data);
    const parsed: any = parse(cnt);
    const name = parsed.payload.requesttype;
    if (!parsed.responsekeys && !parsed.payloadkeys) {
        console.log(
            parsed.payload.requesttype + ' has no response and no payload skipping...',
        );
        out[name] = {ts: [], zod: [], info: { payload: false, response: false}}
        continue;
    }
    out[name] = out[name] || {ts: [], zod: ["import { z } from 'https://deno.land/x/zod/mod.ts';"], info: { payload: false, response: false }};
    if (parsed.payloadkeys) {
        const suffix = path.includes('checkin') && !parsed.responsekeys ? 'Response' : 'Payload'; 
        suffix === 'Response' ? out[name].info.response = true : out[name].info.payload = true;
        out[name].zod.push(`${generateComment(parsed.payload, parsed.description)}export const ${parsed.payload.requesttype}${suffix} = ${generateDict(true, parsed.payloadkeys)};`);
        out[name].ts.push(`${generateComment(parsed.payload, parsed.description)}export type ${parsed.payload.requesttype}${suffix} = ${generateDict(false, parsed.payloadkeys)};`);
    }

    if (parsed.responsekeys) {
        out[name].info.response = true;
        out[name].zod.push(`${generateComment(parsed.payload, parsed.description)}export const ${parsed.payload.requesttype}Response = ${generateDict(true, parsed.responsekeys)};`);
        out[name].ts.push(`${generateComment(parsed.payload, parsed.description)}export type ${parsed.payload.requesttype}Response = ${generateDict(false, parsed.responsekeys)};`);
    }
        
    names.push(parsed.payload.requesttype);
}

for (const [name, data] of Object.entries(out)) {
    if (data.info.payload || data.info.response) {
        Deno.writeTextFileSync(`generated/ts/${name}.ts`, await fmt.format(data.ts.join('\n\n')));
        Deno.writeTextFileSync(`generated/zod/${name}.ts`, await fmt.format(data.zod.join('\n\n')));
    }
}

const mod = names.map((name) => `export type * from "./${name}.ts";`).join(
    '\n',
);
Deno.writeTextFileSync('generated/ts/mod.ts', await fmt.format(mod));
Deno.writeTextFileSync(
    'generated/zod/mod.ts',
    await fmt.format(mod.replaceAll('export type', 'export')),
);

const commandResponse = [];
commandResponse.push("import { z } from 'https://deno.land/x/zod/mod.ts';");
commandResponse.push("import {");
for (const [name, data] of Object.entries(out)) {
    data.info.payload ? commandResponse.push(`${name}Payload,`) : null;
    data.info.response ? commandResponse.push(`${name}Response,`) : null;
}
commandResponse.push(`} from "./mod.ts";`);
commandResponse.push("export enum CommandTypes {");
for (const name of Object.keys(out)) {
    commandResponse.push(`${name} = '${name}',`);
}
commandResponse.push("}");
commandResponse.push(`export const commandResponse = z.discriminatedUnion('command_type', [`);
for (const [name, data] of Object.entries(out)) {
    commandResponse.push("z.object({");
    commandResponse.push(`command_type: z.literal(CommandTypes.${name}),`);
    data.info.payload ? commandResponse.push(`payload: ${name}Payload,`) : null;
    commandResponse.push(data.info.response ? `response: ${name}Response.optional(),` : "response: z.object({}).optional(),");
    commandResponse.push("}),");
}
commandResponse.push("]);")
Deno.writeTextFileSync('generated/zod/commandResponse.ts', await fmt.format(commandResponse.join('\n')));