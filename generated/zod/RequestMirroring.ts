import { z } from 'https://deno.land/x/zod/mod.ts';
export const RequestMirroring = z.object({
    MirroringResult: z.string().optional(),
});
