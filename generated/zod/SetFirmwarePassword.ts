import { z } from 'https://deno.land/x/zod/mod.ts';
export const SetFirmwarePassword = z.object({
  SetFirmwarePassword: z.object({
    PasswordChanged: z.boolean(),
  }),
});
