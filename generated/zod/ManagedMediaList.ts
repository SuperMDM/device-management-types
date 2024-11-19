import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command allows the server to query for installed 3rd party applications.
 *
 * - iOS:
 *    - introduced: 8.0
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: n/a
 *
 * - tvOS:
 *    - introduced: n/a
 *
 * - visionOS:
 *    - introduced: n/a
 *
 * - watchOS:
 *    - introduced: n/a
 */
export const ManagedMediaListResponse = z.object({
    /** An array of dictionaries that describes managed books. */
    Books: z.array(
        z.object({
            /** The book's iTunes Store identifier. */
            iTunesStoreID: z.number(),
            /** The installation state of this book, which is one of the following values:
             ** 'Queued'
             ** 'PromptingForLogin'
             ** 'Updating'
             ** 'Installing'
             ** 'Managed'
             ** 'ManagedButUninstalled'
             ** 'Installed'
             ** 'Uninstalled'
             ** 'Failed'
             ** 'Unknown'
             * The 'Failed' and 'Unknown' states are transient and the device only reports them once. Books from the Book Store report their state as 'Installed' instead of 'Managed'. */
            State: z.string().optional(),
            /** The book's persistent identifier in reverse-DNS form; for example, 'com.acme.manuals.training'. */
            PersistentID: z.string().optional(),
            /** The kind of the media, which is one of the following values:
             ** 'pdf': A PDF file
             ** 'epub': An EPUB file in 'gzip' format
             ** 'ibooks': An iBooks Author file in 'gzip' format
             ** The file extension in the URL
             * This value is available in iOS 8 and later. */
            Kind: z.string().optional(),
            /** The book's version number. */
            Version: z.string().optional(),
            /** The name of the book's author. */
            Author: z.string().optional(),
            /** The book's title. */
            Title: z.string().optional(),
        }),
    ),
});
