import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command allows the server to schedule an OS update.
 *
 * - iOS:
 *    - introduced: 9.0
 *    - accessrights: AllowAppInstallation
 *    - supervised: true
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:forbidden}
 *
 * - macOS:
 *    - introduced: 10.11
 *    - accessrights: None
 *    - devicechannel: true
 *    - userchannel: false
 *    - supervised: true
 *    - requiresdep: false
 *    - userenrollment: {mode:forbidden}
 *
 * - tvOS:
 *    - introduced: 12.0
 *    - accessrights: AllowAppInstallation
 *    - devicechannel: true
 *    - supervised: true
 *    - requiresdep: false
 *
 * - visionOS:
 *    - introduced: n/a
 *
 * - watchOS:
 *    - introduced: n/a
 */
export const ScheduleOSUpdatePayload = z.object({
    /** An array of dictionaries specifying the updates to download or install. If this value is missing, the device applies the default behavior for handling updates. This command is ignored and an informational error is returned if a Software Update is actively managed via a Declarative Device Management 'Software Update Enforcement Policy' configuration, as the Declarative Device Management configuration takes precedence. */
    Updates: z.array(
        z.object({
            /** The product key that represents the update. */
            ProductKey: z.string().optional(),
            /** The version of the update, which the system requires if 'ProductKey' isn't present. This value is available in iOS 11.3 and later, macOS 12 and later, and tvOS 12.2 and later.
             * This value isn't available for use with Rapid Security Response (RSR) updates.
             *
             * - iOS:
             *    - introduced: 11.3
             *
             * - macOS:
             *    - introduced: 12.0
             *
             * - tvOS:
             *    - introduced: 12.2
             */
            ProductVersion: z.string().optional(),
            /** The install action, which is one of the following values:
             *
             ** 'Default': Download or install the update, depending on the current state. You can check the 'UpdateResults' dictionary to review scheduled updates. This value is available in iOS 9 and later, macOS 10.11 and later, and tvOS 12 and later.
             ** 'DownloadOnly': Download the software update without installing it. This value is available in iOS 9 and later, macOS 11 and later, and tvOS 12 and later.
             ** 'InstallASAP': In iOS and tvOS, install a previously downloaded software update. In macOS, download the software update and trigger the restart countdown notification. This value is available in iOS 9 and later, macOS 10.11 and later, and tvOS 12 and later.
             ** 'NotifyOnly': Download the software update and notify the user through the App Store. This value is available in macOS 10.11 and later.
             ** 'InstallLater': Download the software update and install it at a later time. This value is available in macOS 10.11 and later.
             ** 'InstallForceRestart': Perform the 'Default' action, and then force a restart if the update requires it. This value is available in macOS 11 and later.
             *
             * 'InstallForceRestart' may result in data loss. */
            InstallAction: z.string(),
            /** The maximum number of times the system allows the user to postpone an update before it's installed. The system prompts the user once a day.
             * This key is only supported when 'InstallAction' is 'InstallLater' and only supported for minor OS updates (for example, macOS 12.x to 12.y).
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - macOS:
             *    - introduced: 12.0
             *
             * - tvOS:
             *    - introduced: n/a
             */
            MaxUserDeferrals: z.number().optional(),
            /** The scheduling priority for downloading and preparing the requested update. This is only supported for minor OS updates (macOS 12.x to 12.y).
             * Available in macOS 12.3 and later. Prior versions of macOS used a priority of 'Low'.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - macOS:
             *    - introduced: 12.3
             *
             * - tvOS:
             *    - introduced: n/a
             */
            Priority: z.string().optional(),
        }),
    ),
});

/** This command allows the server to schedule an OS update.
 *
 * - iOS:
 *    - introduced: 9.0
 *    - accessrights: AllowAppInstallation
 *    - supervised: true
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:forbidden}
 *
 * - macOS:
 *    - introduced: 10.11
 *    - accessrights: None
 *    - devicechannel: true
 *    - userchannel: false
 *    - supervised: true
 *    - requiresdep: false
 *    - userenrollment: {mode:forbidden}
 *
 * - tvOS:
 *    - introduced: 12.0
 *    - accessrights: AllowAppInstallation
 *    - devicechannel: true
 *    - supervised: true
 *    - requiresdep: false
 *
 * - visionOS:
 *    - introduced: n/a
 *
 * - watchOS:
 *    - introduced: n/a
 */
export const ScheduleOSUpdateResponse = z.object({
    /** An array of dictionaries that describes the results of processing operating-system updates. */
    UpdateResults: z.array(
        z.object({
            /** The product key that represents the update. */
            ProductKey: z.string(),
            /** The install action that the device scheduled, which is one of the following values:
             ** 'Error': An error occurred during scheduling.
             ** 'DownloadOnly': Download the software update without installing it.
             ** 'InstallASAP': Install a previously downloaded software update.
             ** 'NotifyOnly': Download the software update and notify the user through the App Store. This value is available in macOS 10.11 and later.
             ** 'InstallLater': Download the software update and install it at a later time. This value is available in macOS 10.11 and later.
             ** 'InstallForceRestart': Perform the 'Default' action, and then force a restart if the update requires it. This value is available in macOS 11 and later. */
            InstallAction: z.string(),
            /** The status of the update, which is one of the following values:
             ** 'Idle': The update is idle.
             ** 'Downloading': The software update is downloading.
             ** 'DownloadFailed': The download failed.
             ** 'DownloadRequiresComputer': Tether the device to download this update. This value is only available in iOS.
             ** 'DownloadInsufficientSpace': There isn't enough space to download the update.
             ** 'DownloadInsufficientPower': There isn't enough power to download the update.
             ** 'DownloadInsufficientNetwork': The network capacity is insufficient to download the update.
             ** 'Installing': The software update is installing.
             ** 'InstallInsufficientSpace': There isn't enough space to install the update.
             ** 'InstallInsufficientPower': There isn't enough power to install the update.
             ** 'InstallPhoneCallInProgress': Installation couldn't occur because a phone call is in progress.
             ** 'InstallFailed': Installation failed due to an unspecified reason. */
            Status: z.string(),
            /** A dictionary that describes an error chain. */
            ErrorChain: z.array(
                z.object({
                    /** The error details. */
                    ANY: z.any(),
                }),
            ).optional(),
        }),
    ),
});
