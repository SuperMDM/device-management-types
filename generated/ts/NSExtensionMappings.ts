/** This command returns information about installed extensions for a user.
 * The purpose of this command is to allow the server to build a mapping of
 * extension identifiers to extension points to provide a UI for generating
 * "com.apple.NSExtension" payloads.
 * Requires "Query Installed Apps" right; supported on user channel only
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 10.13
 *    - accessrights: QueryInstalledApps
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
export type NSExtensionMappingsResponse = {
    /** An array of dictionaries that contains information about extensions on the device. */
    Extensions: Array<
        {
            /** The identifier of the extension. */
            Identifier: string;
            /** The NSExtensionPointIdentifier for the extension. */
            ExtensionPoint: string;
            /** The display name of the extension. */
            DisplayName: string;
        }
    >;
};
