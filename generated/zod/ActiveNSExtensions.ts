import { z } from 'https://deno.land/x/zod/mod.ts';

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
export const ActiveNSExtensions = z.object({
    /** An array of dictionaries that contains information about active extensions on the device. */
    Extensions: z.array(
        z.object({
            /** The identifier of the extension. */
            Identifier: z.string(),
            /** The NSExtensionPointIdentifier for the extension. */
            ExtensionPoint: z.string(),
            /** The extension's display name. */
            DisplayName: z.string(),
            /** The display name of the container. */
            ContainerDisplayName: z.string().optional(),
            /** The identifier of the container. */
            ContainerIdentifier: z.string().optional(),
            /** The path to the extension. */
            Path: z.string(),
            /** The version of the extension. */
            Version: z.string(),
            /** The user-selected state of the extension, which a user sets in the Extensions preference pane in System Preferences. */
            UserElection: z.string(),
        }),
    ),
});
