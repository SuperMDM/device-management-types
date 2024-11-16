import { z } from 'https://deno.land/x/zod/mod.ts';
export const ProfileList = z.object({
  ProfileList: z.array(
    z.object({
      PayloadUUID: z.string(),
      PayloadIdentifier: z.string(),
      PayloadVersion: z.number().optional(),
      PayloadDisplayName: z.string().optional(),
      PayloadOrganization: z.string().optional(),
      PayloadDescription: z.string().optional(),
      PayloadRemovalDisallowed: z.boolean().optional(),
      HasRemovalPasscode: z.boolean().optional(),
      IsEncrypted: z.boolean().optional(),
      SignerCertificates: z.array(z.string()).optional(),
      IsManaged: z.boolean().optional(),
      Source: z.string().optional(),
      PayloadContent: z.array(
        z.object({
          PayloadType: z.string(),
          PayloadVersion: z.number(),
          PayloadIdentifier: z.string(),
          PayloadUUID: z.string().optional(),
          PayloadDisplayName: z.string().optional(),
          PayloadDescription: z.string().optional(),
          PayloadOrganization: z.string().optional(),
        }),
      ).optional(),
    }),
  ),
});
