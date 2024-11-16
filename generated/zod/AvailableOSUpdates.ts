import { z } from 'https://deno.land/x/zod/mod.ts';
export const AvailableOSUpdates = z.object({
    AvailableOSUpdates: z.array(
        z.object({
            ProductKey: z.string(),
            HumanReadableName: z.string(),
            HumanReadableNameLocale: z.string().optional(),
            MetadataURL: z.string().optional(),
            ProductName: z.string().optional(),
            Version: z.string(),
            Build: z.string(),
            DownloadSize: z.number().optional(),
            InstallSize: z.number().optional(),
            AppIdentifiersToClose: z.array(z.string()).optional(),
            IsCritical: z.boolean().optional(),
            IsConfigDataUpdate: z.boolean().optional(),
            IsFirmwareUpdate: z.boolean().optional(),
            IsMajorOSUpdate: z.boolean().optional(),
            RestartRequired: z.boolean().optional(),
            AllowsInstallLater: z.boolean().optional(),
            DeferredUntil: z.date().optional(),
            RequiresBootstrapToken: z.boolean().optional(),
            IsSecurityResponse: z.boolean().optional(),
            SupplementalBuildVersion: z.string().optional(),
            SupplementalOSVersionExtra: z.string().optional(),
        }),
    ),
});
