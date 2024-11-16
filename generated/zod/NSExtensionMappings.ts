import { z } from 'https://deno.land/x/zod/mod.ts';
export const NSExtensionMappings = z.object({
    Extensions: z.array(
        z.object({
            Identifier: z.string(),
            ExtensionPoint: z.string(),
            DisplayName: z.string(),
        }),
    ),
});
