import { z } from 'https://deno.land/x/zod/mod.ts';
export const ScheduleOSUpdateScan = z.object({
  ScanInitiated: z.boolean(),
});
