import { z } from 'https://deno.land/x/zod/mod.ts';
export const ScheduleOSUpdate = z.object({
    UpdateResults: z.array(
        z.object({
            ProductKey: z.string(),
            InstallAction: z.string(),
            Status: z.string(),
            ErrorChain: z.array(
                z.object({
                    ANY: z.any(),
                }),
            ).optional(),
        }),
    ),
});
