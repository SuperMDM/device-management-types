import { z } from "https://deno.land/x/zod/mod.ts";
export const UserList = z.object({
  Users: z.array(
    z.object({
      UserName: z.string(),
      FullName: z.string().optional(),
      UID: z.number().optional(),
      UserGUID: z.string().optional(),
      IsLoggedIn: z.boolean(),
      HasDataToSync: z.boolean().optional(),
      DataQuota: z.number().optional(),
      DataUsed: z.number().optional(),
      MobileAccount: z.boolean().optional(),
      HasSecureToken: z.boolean().optional(),
    }),
  ),
});
