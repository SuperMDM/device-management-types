import { z } from 'https://deno.land/x/zod/mod.ts';
export const ManagedApplicationFeedback = z.object({
  ManagedApplicationFeedback: z.array(
    z.object({
      Identifier: z.string(),
      Feedback: z.object({
        ANY: z.any().optional(),
      }).optional(),
    }),
  ),
});
