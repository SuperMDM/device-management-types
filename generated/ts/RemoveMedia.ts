/** This command allows an MDM server to remove managed media. This command returns Acknowledged even if the item is not found.
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
export type RemoveMediaPayload = {
    /** The media type, which can only be 'Book'. */
    MediaType: string;
    /** The book's iTunes Store identifier. */
    iTunesStoreID: string | undefined;
    /** The book's persistent identifier in reverse-DNS form; for example, 'com.acme.manuals.training'. */
    PersistentID: string | undefined;
};
