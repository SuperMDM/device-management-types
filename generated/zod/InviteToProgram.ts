import { z } from "https://deno.land/x/zod/mod.ts";
export const InviteToProgram = z.object({
  InvitationResult: z.string(),
});
