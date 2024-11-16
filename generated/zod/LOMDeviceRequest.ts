import { z } from 'https://deno.land/x/zod/mod.ts';
export const LOMDeviceRequest = z.object({
  ResponseList: z.array(
    z.object({
      DeviceRequestSuccess: z.boolean(),
      DeviceRequestUUID: z.string(),
      DeviceRequestReturnError: z.string().optional(),
    }),
  ),
});
