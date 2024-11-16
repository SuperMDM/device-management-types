import { z } from 'https://deno.land/x/zod/mod.ts';
export const InstallApplication = z.object({
    Identifier: z.string().optional(),
    State: z.string().optional(),
    RejectionReason: z.string().optional(),
});
