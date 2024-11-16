import { z } from "https://deno.land/x/zod/mod.ts";
export const ManagedApplicationConfiguration = z.object({
  ApplicationConfigurations: z.array(
    z.object({
      Identifier: z.string(),
      Configuration: z.object({
        ANY: z.any().optional(),
      }).optional(),
    }),
  ),
});
