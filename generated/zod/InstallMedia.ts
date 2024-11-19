import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command allows the server to install a book on a device. If the book is already being managed, this command will update the book.
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
 *    - introduced: 10.9
 *    - accessrights: AllowAppInstallation
 *    - devicechannel: false
 *    - userchannel: true
 *    - requiresdep: false
 *    - userenrollment: {mode:forbidden}
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
export const InstallMediaPayload = z.object({
    /** The book's iTunes Store identifier. */
    iTunesStoreID: z.number().optional(),
    /** The URL to retrieve the book. This value is available in iOS 8 and later.
     *
     * - macOS:
     *    - introduced: n/a
     */
    MediaURL: z.string().optional(),
    /** The media type, which can only be 'Book'. */
    MediaType: z.string(),
    /** The book's persistent identifier in reverse-DNS form; for example, 'com.acme.manuals.training'. This value is available in iOS 8 and later.
     *
     * - macOS:
     *    - introduced: n/a
     */
    PersistentID: z.string().optional(),
    /** The kind of the media, which can be one of the following values:
     ** 'pdf': A PDF file
     ** 'epub': An EPUB file in 'gzip' format.
     ** 'ibooks': An iBooks Author file in 'gzip' format.
     * If you omit this value, its value is the file extension in the URL. This value is available in iOS 8 and later.
     *
     * - macOS:
     *    - introduced: n/a
     */
    Kind: z.string().optional(),
    /** The book's version number. This value is available in iOS 8 and later.
     *
     * - macOS:
     *    - introduced: n/a
     */
    Version: z.string().optional(),
    /** The name of the book's author. This value is available in iOS 8 and later.
     *
     * - macOS:
     *    - introduced: n/a
     */
    Author: z.string().optional(),
    /** The book's title. This value is available in iOS 8 and later.
     *
     * - macOS:
     *    - introduced: n/a
     */
    Title: z.string().optional(),
});

/** This command allows the server to install a book on a device. If the book is already being managed, this command will update the book.
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
 *    - introduced: 10.9
 *    - accessrights: AllowAppInstallation
 *    - devicechannel: false
 *    - userchannel: true
 *    - requiresdep: false
 *    - userenrollment: {mode:forbidden}
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
export const InstallMediaResponse = z.object({
    /** The book's iTunes Store identifier, if present in the command. */
    iTunesStoreID: z.number().optional(),
    /** The URL to retrieve the book, if present in the command. This value is available in iOS 8 and later.
     *
     * - macOS:
     *    - introduced: n/a
     */
    MediaURL: z.string().optional(),
    /** The book's persistent identifier, if present in the command. This value is available in iOS 8 and later.
     *
     * - macOS:
     *    - introduced: n/a
     */
    PersistentID: z.string().optional(),
    /** The media type, which can only be 'Book'. */
    MediaType: z.string().optional(),
    /** The installation state of this book. The 'Failed' and 'Unknown' states are transient and the device only reports them once. Books from the Book Store report their state as 'Installed' instead of 'Managed'. */
    State: z.string().optional(),
    /** The reason, if installation fails, which is one of the following values:
     ** 'CouldNotVerifyITunesStoreID': The 'iTunesStoreID' is invalid.
     ** 'PurchaseNotFound': The Volume Purchase Program (VPP) license isn't in the user's history.
     ** 'AppStoreDisabled': App Store isn't available on the device.
     ** 'WrongMediaType': The media type is invalid. The only valid type is 'Book'.
     ** 'DownloadInvalid': The URL doesn't lead to a valid book.
     ** 'EnterpriseBooksNotSupportedInMultiUser': Multiuser mode doesn't support enterprise books. */
    RejectionReason: z.string().optional(),
});
