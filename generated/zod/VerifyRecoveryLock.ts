import { z } from 'https://deno.land/x/zod/mod.ts';
export const VerifyRecoveryLock = z.object({
  PasswordVerified: z.boolean(),
});
