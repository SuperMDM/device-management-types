import { z } from 'https://deno.land/x/zod/mod.ts';
export const OSUpdateStatus = z.object({
    OSUpdateStatus: z.array(
        z.object({
            ProductKey: z.string(),
            IsDownloaded: z.boolean(),
            DownloadPercentComplete: z.number(),
            Status: z.string(),
            MaxDeferrals: z.number().optional(),
            DeferralsRemaining: z.number().optional(),
            NextScheduledInstall: z.date().optional(),
            PastNotifications: z.array(z.date()).optional(),
        }),
    ),
});
