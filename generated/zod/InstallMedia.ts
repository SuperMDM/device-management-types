import { z } from "https://deno.land/x/zod/mod.ts";
export const InstallMedia = z.object({
  iTunesStoreID: z.number().optional(),
  MediaURL: z.string().optional(),
  PersistentID: z.string().optional(),
  MediaType: z.string().optional(),
  State: z.string().optional(),
  RejectionReason: z.string().optional(),
});
