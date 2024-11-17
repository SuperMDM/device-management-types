import { z } from 'https://deno.land/x/zod/mod.ts';
export const SetBootstrapToken = z.object({
    MessageType: z.string(),
    BootstrapToken: z.string().optional(),
    AwaitingConfiguration: z.boolean().optional(),
});
