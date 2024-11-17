/** Returns information about the active NSExtensions for a particular user.
 * NSExtensions are installed and enabled at the user level. There is no concept of "device" NSExtensions.
 * Requires "Query Installed Apps" right; supported on user channel only.
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
export type ActiveNSExtensions = {
    /** An array of dictionaries that contains information about active extensions on the device. */
    Extensions: Array<
        {
            /** The identifier of the extension. */
            Identifier: string;
            /** The NSExtensionPointIdentifier for the extension. */
            ExtensionPoint: string;
            /** The extension's display name. */
            DisplayName: string;
            /** The display name of the container. */
            ContainerDisplayName: string | undefined;
            /** The identifier of the container. */
            ContainerIdentifier: string | undefined;
            /** The path to the extension. */
            Path: string;
            /** The version of the extension. */
            Version: string;
            /** The user-selected state of the extension, which a user sets in the Extensions preference pane in System Preferences. */
            UserElection: string;
        }
    >;
};
