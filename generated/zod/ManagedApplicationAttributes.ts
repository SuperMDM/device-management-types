import { z } from 'https://deno.land/x/zod/mod.ts';

/** Queries managed application attributes. Attributes can be set on managed apps. These attributes can be changed over time. The response will not include apps that are managed by Declarative Device Management.
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
 *    - introduced: n/a
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
export const ManagedApplicationAttributesPayload = z.object({
    /** The bundle identifiers of the managed apps.
     * For a watchOS app, the identifier needs to be the watch's bundle identifier, which differs from the main bundle identifier for the iPhone to which the watch is paired. Obtain the watch's bundle identifier for an app with a watch bundle, in the 'watchBundleId' key that's part of the Content Metadata query. For more information on this query, see Getting App and Book Information (Legacy). */
    Identifiers: z.array(z.string()),
});

/** Queries managed application attributes. Attributes can be set on managed apps. These attributes can be changed over time. The response will not include apps that are managed by Declarative Device Management.
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
 *    - introduced: n/a
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
export const ManagedApplicationAttributesResponse = z.object({
    /** An array of app attributes items. */
    ApplicationAttributes: z.array(
        z.object({
            /** The app's bundle identifier.
             * For a watchOS app, the identifier is the watch's bundle identifier, which differs from the main bundle identifier for the iPhone to which the watch is paired. */
            Identifier: z.string(),
            /** The app's attributes. */
            Attributes: z.object({
                /** A per-app VPN unique identifier for this app.
                 *
                 * - tvOS:
                 *    - introduced: n/a
                 */
                VPNUUID: z.string().optional(),
                /** The content Filter UUID assigned to this app.
                 * Available in iOS 16 and later.
                 *
                 * - iOS:
                 *    - introduced: 16.0
                 *
                 * - tvOS:
                 *    - introduced: n/a
                 *
                 * - watchOS:
                 *    - introduced: n/a
                 */
                ContentFilterUUID: z.string().optional(),
                /** The DNS Proxy UUID assigned to this app.
                 * Available in iOS 16 and later.
                 *
                 * - iOS:
                 *    - introduced: 16.0
                 *
                 * - tvOS:
                 *    - introduced: n/a
                 *
                 * - watchOS:
                 *    - introduced: n/a
                 */
                DNSProxyUUID: z.string().optional(),
                /** The relay UUID for this app.
                 *
                 * - iOS:
                 *    - introduced: 17.0
                 *
                 * - tvOS:
                 *    - introduced: n/a
                 *
                 * - watchOS:
                 *    - introduced: n/a
                 */
                RelayUUID: z.string().optional(),
                /** This app's associated domains. This value is available in iOS 13 and later.
                 *
                 * - iOS:
                 *    - introduced: 13.0
                 *
                 * - tvOS:
                 *    - introduced: n/a
                 */
                AssociatedDomains: z.array(z.string()).optional(),
                /** If 'true', perform claimed site association verification directly at the domain instead of on Apple's servers. Only set this to 'true' for domains that can't access the internet. This value is available in iOS 14 and later.
                 *
                 * - iOS:
                 *    - introduced: 14.0
                 *
                 * - tvOS:
                 *    - introduced: n/a
                 */
                AssociatedDomainsEnableDirectDownloads: z.boolean().optional(),
                /** If 'false', this app isn't removable while it's a managed app. This value is available in iOS 14 and later.
                 *
                 * - iOS:
                 *    - introduced: 14.0
                 *
                 * - tvOS:
                 *    - introduced: 14.0
                 */
                Removable: z.boolean().optional(),
                /** Enabling this setting will require Tap to Pay on iPhone users to use Face ID or a passcode to unlock their device after every transaction that requires a customer’s card PIN. Disabling this setting will allow users to configure this setting on their device based on personal preference.
                 *
                 * - iOS:
                 *    - introduced: 16.4
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
                TapToPayScreenLock: z.boolean().optional(),
                /** Either data network name (DNN) or traffic category can be set as the enterprise slice identifier. For DNN, the value must be encoded as "DNN:name”, where "name" is the carrier provided DNN name. For app category, the value must be encoded as "AppCategory:category", where "category" is a carrier provided string like "Enterprise1".
                 *
                 * - iOS:
                 *    - introduced: 17.0
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
                CellularSliceUUID: z.string().optional(),
                /** If set to false, the user is prevented from hiding the app. It does not affect the user's ability to leave it in the App Library, while removing it from the home screen.
                 *
                 * - iOS:
                 *    - introduced: 18.1
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
                Hideable: z.boolean().optional(),
                /** If set to false, the user is prevented from locking the app. Because hiding an app also requires locking it, disallowing the user from locking the app will also prevent the user from hiding it.
                 *
                 * - iOS:
                 *    - introduced: 18.1
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
                Lockable: z.boolean().optional(),
            }).optional(),
        }),
    ),
});
