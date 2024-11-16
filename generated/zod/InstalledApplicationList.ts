import { z } from 'https://deno.land/x/zod/mod.ts';
export const InstalledApplicationList = z.object({
  InstalledApplicationList: z.array(
    z.object({
      Identifier: z.string().optional(),
      ExternalVersionIdentifier: z.number().optional(),
      DistributorIdentifier: z.string().optional(),
      Version: z.string().optional(),
      ShortVersion: z.string().optional(),
      Name: z.string().optional(),
      BundleSize: z.number().optional(),
      DynamicSize: z.number().optional(),
      IsValidated: z.boolean().optional(),
      Installing: z.boolean().optional(),
      AppStoreVendable: z.boolean().optional(),
      DeviceBasedVPP: z.boolean().optional(),
      BetaApp: z.boolean().optional(),
      AdHocCodeSigned: z.boolean().optional(),
      HasUpdateAvailable: z.boolean().optional(),
      DownloadFailed: z.boolean().optional(),
      DownloadWaiting: z.boolean().optional(),
      DownloadPaused: z.boolean().optional(),
      DownloadCancelled: z.boolean().optional(),
      IsAppClip: z.boolean().optional(),
      Source: z.string().optional(),
    }),
  ),
});
