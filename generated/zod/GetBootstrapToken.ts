import { z } from 'https://deno.land/x/zod/mod.ts';
export const GetBootstrapToken = z.object({
    BootstrapToken: z.string().optional(),
});
