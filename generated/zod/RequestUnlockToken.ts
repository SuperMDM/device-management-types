import { z } from 'https://deno.land/x/zod/mod.ts';
export const RequestUnlockToken = z.object({
    UnlockToken: z.string(),
});
