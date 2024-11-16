import { z } from 'https://deno.land/x/zod/mod.ts';
export const ProvisioningProfileList = z.object({
    ProvisioningProfileList: z.array(
        z.object({
            Name: z.string(),
            UUID: z.string(),
            ExpiryDate: z.date().optional(),
        }),
    ),
});
