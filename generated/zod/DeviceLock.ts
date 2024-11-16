import { z } from 'https://deno.land/x/zod/mod.ts';
export const DeviceLock = z.object({
  MessageResult: z.string().optional(),
});
