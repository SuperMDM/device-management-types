import { z } from 'https://deno.land/x/zod/mod.ts';
export const GetToken = z.object({
    TokenData: z.string(),
});
