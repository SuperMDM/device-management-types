import { z } from 'https://deno.land/x/zod/mod.ts';
export const LOMSetupRequest = z.object({
    PrimaryIPv6AddressList: z.array(z.string()),
    SecondaryIPv6AddressList: z.array(z.string()),
    LOMProtocolVersion: z.number(),
});
