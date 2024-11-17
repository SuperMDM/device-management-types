import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command allows the server to query the status of managed apps. Certain statuses are transient. Once they are reported to the server, the entries for the apps are removed from the next query. macOS supports this command on the user channel starting with macOS 11.3.
 *
 * - iOS:
 *    - introduced: 5.0
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 11.0
 *    - accessrights: AllowAppInstallation
 *    - devicechannel: true
 *    - userchannel: true
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
export const ManagedApplicationList = z.object({
    /** A dictionary that contains status information about each managed app. The response will not include apps that are managed by Declarative Device Management. */
    ManagedApplicationList: z.object({
        /** The bundle identifier of the managed app. */
        'ANY app identifier': z.object({
            /** The status of the managed app, which is one of the following values:
             ** 'Queued': The app is scheduled for installation.
             ** 'NeedsRedemption': The app needs a redemption code to complete installation.
             ** 'Redeeming': The device is redeeming the redemption code for the app.
             ** 'Prompting': The app installation is prompting the user.
             ** 'PromptingForLogin' - The app installation is prompting the user for App Store credentials.
             ** 'ValidatingPurchase': Validation of the app purchase is occurring.
             ** 'PromptingForUpdate': An app update is prompting the user.
             ** 'PromptingForUpdateLogin': An app update is prompting the user for App Store credentials.
             ** 'PromptingForManagement': Changing the app to a managed app is prompting the user.
             ** 'ValidatingUpdate': Validation of an app update is occurring.
             ** 'Updating': The app is updating.
             ** 'Installing': The app is installing.
             ** 'Managed': The installed app is a managed app.
             ** 'ManagedButUninstalled': The app is a managed app and the user removed it. Reinstalling the app reinstates it as a managed app.
             ** 'Unknown': The app state is unknown.
             * The following statuses are transient and report only once:
             ** 'UserInstalledApp': The user installed the app before managed app installation could occur.
             ** 'UserRejected': The user rejected the offer to install the app.
             ** 'UpdateRejected': The user rejected the offer to update the app.
             ** 'ManagementRejected':The user rejected management of an installed app.
             ** 'Failed': The app installation failed. */
            Status: z.string(),
            /** The bitwise OR of the following management flags:
             ** '1': Remove app upon removal of MDM profile.
             ** '4': Prevent backup of app data. */
            ManagementFlags: z.number(),
            /** If the user already purchased a paid app, this code is available for use by another user. This code reports only once. This value is available in iOS 5 and later.
             *
             * - macOS:
             *    - introduced: n/a
             *
             * - tvOS:
             *    - introduced: n/a
             */
            UnusedRedemptionCode: z.string().optional(),
            /** If 'true', the app has an update available. This key is present only for App Store apps. In macOS, this key is present only for Volume Purchase Program (VPP) apps. This status updates daily and isn't always up-to-date when installing an app.
             *
             * - iOS:
             *    - introduced: 7.0
             *
             * - macOS:
             *    - introduced: 11.0
             */
            HasConfiguration: z.boolean().optional(),
            /** If 'true', the app has feedback for the server. This value is available in iOS 7 and later, and tvOS 10.2 and later. On macOS 11.3 and later, this value is available if the request was sent on the user channel.
             *
             * - iOS:
             *    - introduced: 7.0
             *
             * - macOS:
             *    - introduced: 11.3
             *    - devicechannel: false
             */
            HasFeedback: z.boolean().optional(),
            /** If 'true', the app is valid and can run on the device. If the app is enterprise-distributed and unvalidated, it won't be able to run until validation has occurred. This value is available in iOS 9.2 and later, and tvOS 10.2 and later.
             *
             * - iOS:
             *    - introduced: 9.2
             *
             * - macOS:
             *    - introduced: n/a
             */
            IsValidated: z.boolean().optional(),
            /** The app's external version identifier, which you can use in the iTunes Search API to determine if an updated version of the app is available. Compare this value to the 'externalId' value in the 'contentMetadataLookupUrl' response from the 'VPPServiceConfigSrv' endpoint. If these values don't match, an updated version of the app may be available. This value is available in iOS 10.3 and later, macOS 11.3 and later, and tvOS 10.2 and later.
             * A newer version of an app may not be available for installation on the device for a variety of reasons, including that the device's operating system version or hardware is incompatible with the available version of the app.
             *
             * - iOS:
             *    - introduced: 10.3
             *
             * - macOS:
             *    - introduced: 11.3
             *
             * - tvOS:
             *    - introduced: 10.2
             */
            ExternalVersionIdentifier: z.number().optional(),
        }),
    }),
});
