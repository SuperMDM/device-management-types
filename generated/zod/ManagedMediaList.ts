import { z } from 'https://deno.land/x/zod/mod.ts';
export const ManagedMediaList = z.object({
    Books: z.array(
        z.object({
            iTunesStoreID: z.number(),
            State: z.string().optional(),
            PersistentID: z.string().optional(),
            Kind: z.string().optional(),
            Version: z.string().optional(),
            Author: z.string().optional(),
            Title: z.string().optional(),
        }),
    ),
});
