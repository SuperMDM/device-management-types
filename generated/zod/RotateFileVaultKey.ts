import { z } from "https://deno.land/x/zod/mod.ts";
export const RotateFileVaultKey = z.object({
  RotateResult: z.object({
    EncryptedNewRecoveryKey: z.string().optional(),
  }).optional(),
});
