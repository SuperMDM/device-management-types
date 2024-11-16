import { z } from 'https://deno.land/x/zod/mod.ts';
export const CertificateList = z.object({
    CertificateList: z.array(
        z.object({
            CommonName: z.string(),
            IsIdentity: z.boolean(),
            Data: z.string(),
        }),
    ),
});
