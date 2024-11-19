import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command queries the device for the current configuration of managed applications. This command requires the App Management right. The response will not include apps that are managed by Declarative Device Management.
 *
 * - iOS:
 *    - introduced: 7.0
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 10.15
 *    - accessrights: AllowAppInstallation
 *    - devicechannel: true
 *    - userchannel: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - tvOS:
 *    - introduced: 10.2
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 */
export const ManagedApplicationConfigurationPayload = z.object({
    /** The bundle identifiers of the managed apps.
     * For a watchOS app, the identifier needs to be the watch's bundle identifier, which differs from the main bundle identifier for the iPhone to which the watch is paired. Obtain the watch's bundle identifier for an app with a watch bundle, in the 'watchBundleId' key that's part of the Content Metadata query. For more information on this query, see Getting App and Book Information (Legacy). */
    Identifiers: z.array(z.string()),
});

/** This command queries the device for the current configuration of managed applications. This command requires the App Management right. The response will not include apps that are managed by Declarative Device Management.
 *
 * - iOS:
 *    - introduced: 7.0
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 10.15
 *    - accessrights: AllowAppInstallation
 *    - devicechannel: true
 *    - userchannel: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - tvOS:
 *    - introduced: 10.2
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 */
export const ManagedApplicationConfigurationResponse = z.object({
    /** An array of app configurations items. */
    ApplicationConfigurations: z.array(
        z.object({
            /** The app's bundle identifier.
             * For a watchOS app, the identifier is the watch's bundle identifier, which differs from the main bundle identifier for the iPhone to which the watch is paired. */
            Identifier: z.string(),
            /** The app's configurations. */
            Configuration: z.object({
                /** The app's configuration items. */
                ANY: z.any().optional(),
            }).optional(),
        }),
    ),
});
