import { z } from 'https://deno.land/x/zod/mod.ts';
export const UserAuthenticate = z.object({
    MessageType: z.string(),
    UDID: z.string(),
    UserID: z.string(),
    DigestResponse: z.string(),
});
