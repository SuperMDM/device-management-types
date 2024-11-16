import { z } from 'https://deno.land/x/zod/mod.ts';
export const Settings = z.object({
  Settings: z.object({
    Status: z.string(),
    ErrorChain: z.array(
      z.object({
        ANY: z.any(),
      }),
    ).optional(),
    Identifier: z.string().optional(),
  }).optional(),
});
