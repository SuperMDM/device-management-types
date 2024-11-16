import { z } from 'https://deno.land/x/zod/mod.ts';
export const ManagedApplicationAttributes = z.object({
  ApplicationAttributes: z.array(
    z.object({
      Identifier: z.string(),
      Attributes: z.object({
        VPNUUID: z.string().optional(),
        ContentFilterUUID: z.string().optional(),
        DNSProxyUUID: z.string().optional(),
        RelayUUID: z.string().optional(),
        AssociatedDomains: z.array(z.string()).optional(),
        AssociatedDomainsEnableDirectDownloads: z.boolean().optional(),
        Removable: z.boolean().optional(),
        TapToPayScreenLock: z.boolean().optional(),
        CellularSliceUUID: z.string().optional(),
        Hideable: z.boolean().optional(),
        Lockable: z.boolean().optional(),
      }).optional(),
    }),
  ),
});
