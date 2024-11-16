import { z } from "https://deno.land/x/zod/mod.ts";
export const ActiveNSExtensions = z.object({
  Extensions: z.array(
    z.object({
      Identifier: z.string(),
      ExtensionPoint: z.string(),
      DisplayName: z.string(),
      ContainerDisplayName: z.string().optional(),
      ContainerIdentifier: z.string().optional(),
      Path: z.string(),
      Version: z.string(),
      UserElection: z.string(),
    }),
  ),
});
