import { z } from 'https://deno.land/x/zod/mod.ts';
export const ActivationLockBypassCode = z.object({
  ActivationLockBypassCode: z.string(),
});
