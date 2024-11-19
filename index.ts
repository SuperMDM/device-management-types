import { JSZip } from 'https://deno.land/x/jszip/mod.ts';
import { parse } from 'jsr:@std/yaml';
import { assert } from 'https://deno.land/std@0.116.0/_util/assert.ts';
import { Formatter } from 'https://deno.land/x/deno_fmt@0.1.5/mod.ts';

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
for (const [path, file] of yamlFiles) {
    const data = await file.async('uint8array');
    const cnt = new TextDecoder().decode(data);
    const parsed: any = parse(cnt);
    if (!parsed.responsekeys && path.includes('commands')) {
        console.log(
            parsed.payload.requesttype + ' has no response skipping...',
        );
        continue;
    }
    const name = parsed.payload.requesttype + '.ts';
    let zod = 'import { z } from "https://deno.land/x/zod/mod.ts";\n\n';
    let ts = ``;
    if (parsed.payloadkeys) {
        zod += `${generateComment(parsed.payload, parsed.description)}export const ${parsed.payload.requesttype}Payload = ${generateDict(true, parsed.payloadkeys)};\n\n`;
        ts += `${generateComment(parsed.payload, parsed.description)}export type ${parsed.payload.requesttype}Payload = ${generateDict(false, parsed.payloadkeys)};\n\n`;
    }

    if (parsed.responsekeys) {
        zod += `${generateComment(parsed.payload, parsed.description)}export const ${parsed.payload.requesttype}Response = ${generateDict(true, parsed.responsekeys)};`;
        ts += `${generateComment(parsed.payload, parsed.description)}export type ${parsed.payload.requesttype}Response = ${generateDict(false, parsed.responsekeys)};`;
    }
        
    Deno.writeTextFileSync('generated/zod/' + name, await fmt.format(zod));
    Deno.writeTextFileSync('generated/ts/' + name, await fmt.format(ts));
    names.push(parsed.payload.requesttype);
}

const mod = names.map((name) => `export type * from "./${name}.ts";`).join(
    '\n',
);
Deno.writeTextFileSync('generated/ts/mod.ts', await fmt.format(mod));
Deno.writeTextFileSync(
    'generated/zod/mod.ts',
    await fmt.format(mod.replaceAll('export type', 'export')),
);
