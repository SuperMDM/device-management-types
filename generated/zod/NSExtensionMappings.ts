import { z } from 'https://deno.land/x/zod/mod.ts';

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
export const NSExtensionMappings = z.object({
    /** An array of dictionaries that contains information about extensions on the device. */
    Extensions: z.array(
        z.object({
            /** The identifier of the extension. */
            Identifier: z.string(),
            /** The NSExtensionPointIdentifier for the extension. */
            ExtensionPoint: z.string(),
            /** The display name of the extension. */
            DisplayName: z.string(),
        }),
    ),
});
