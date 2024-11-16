import { z } from 'https://deno.land/x/zod/mod.ts';
export const ManagedApplicationList = z.object({
  ManagedApplicationList: z.object({
    'ANY app identifier': z.object({
      Status: z.string(),
      ManagementFlags: z.number(),
      UnusedRedemptionCode: z.string().optional(),
      HasConfiguration: z.boolean().optional(),
      HasFeedback: z.boolean().optional(),
      IsValidated: z.boolean().optional(),
      ExternalVersionIdentifier: z.number().optional(),
    }),
  }),
});
