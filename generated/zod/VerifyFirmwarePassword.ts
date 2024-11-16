import { z } from "https://deno.land/x/zod/mod.ts";
export const VerifyFirmwarePassword = z.object({
  VerifyFirmwarePassword: z.object({
    PasswordVerified: z.boolean(),
  }),
});
