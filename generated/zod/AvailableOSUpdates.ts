import { z } from 'https://deno.land/x/zod/mod.ts';

/** Queries the device for a list of available OS updates. On OS X, a ScheduleOSUpdateScan must be performed to update the results returned by this query.
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
export const AvailableOSUpdates = z.object({
    /** An array of dictionaries that contains only the most recent available updates in iOS and tvOS, and possibly multiple available updates in macOS. Follow the instructions in the Managed Apps and Updates section of the Apple Software Lookup Service to find a complete catalog of iOS and tvOS updates.
     * In macOS 14 and later, 'AvailableOSUpdates' doesn't include InstallAssistant-based, full-replacement installers. It only contains over-the-air (OTA) updates. OTA updates can update or upgrade the OS and support all 'InstallAction' options. If a Software Update is actively managed via a Declarative Device Management Specific Enforcement configuration this command is ignored as it pertains to the actively managed update. This command may return information around unmanaged updates such as System Applications and Configuration Data. For actively available updates in conjunction with a declarative configuration, please reference the Apple Software Lookup Service. */
    AvailableOSUpdates: z.array(
        z.object({
            /** The product key that represents the update. */
            ProductKey: z.string(),
            /** The human-readable name of the update in the current user's current locale. */
            HumanReadableName: z.string(),
            /** The locale, in IOS639-1 Alpha-2 code format, of the 'HumanReadableName' value. This value is available in macOS 10.11 and later.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - tvOS:
             *    - introduced: n/a
             */
            HumanReadableNameLocale: z.string().optional(),
            /** A URL where the MDM server can request additional localized names for this update. This key isn't present for certain updates, such as mobile software updates (MSUs) or major OS updates. This value is available in macOS 10.11 and later.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - tvOS:
             *    - introduced: n/a
             */
            MetadataURL: z.string().optional(),
            /** The product name; for example, iOS. This value is available in iOS 9.0 and later, and tvOS 12.0 and later.
             *
             * - macOS:
             *    - introduced: n/a
             */
            ProductName: z.string().optional(),
            /** The version of the update. */
            Version: z.string(),
            /** The build number of the update. */
            Build: z.string(),
            /** The storage size necessary to download the software update. Prior to macOS 10.14, this only includes major operating-system updates. In macOS 10.14 and later, this also includes minor updates.
             *
             * - macOS:
             *    - introduced: 10.12
             */
            DownloadSize: z.number().optional(),
            /** The storage size necessary to install the update. This value is available in iOS 9.0 and later, and tvOS 12.0 and later.
             *
             * - macOS:
             *    - introduced: n/a
             */
            InstallSize: z.number().optional(),
            /** An array that contains app identifiers of apps to close so you can install the update. This value is available in macOS 10.11 and later.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - tvOS:
             *    - introduced: n/a
             */
            AppIdentifiersToClose: z.array(z.string()).optional(),
            /** If 'true', this is a critical update. */
            IsCritical: z.boolean().optional(),
            /** If 'true', this is an update to a configuration file. This value is available in macOS 10.11 and later.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - tvOS:
             *    - introduced: n/a
             */
            IsConfigDataUpdate: z.boolean().optional(),
            /** If 'true', this is an update to firmware. This value is available in macOS 10.11 and later.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - tvOS:
             *    - introduced: n/a
             */
            IsFirmwareUpdate: z.boolean().optional(),
            /** If 'true', this is a major update; for example, 10.15.x to 11. This value is available in macOS 10.11 and later.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - macOS:
             *    - introduced: 10.11.4
             *
             * - tvOS:
             *    - introduced: n/a
             */
            IsMajorOSUpdate: z.boolean().optional(),
            /** If 'true', the device restarts after installing the update. */
            RestartRequired: z.boolean().optional(),
            /** If 'true', download the software update and install it later. */
            AllowsInstallLater: z.boolean().optional(),
            /** If present, the date when you want the update to install. This value is available in macOS 10.12.4 and later.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - macOS:
             *    - introduced: 10.12.4
             *
             * - tvOS:
             *    - introduced: n/a
             */
            DeferredUntil: z.date().optional(),
            /** If 'true', the device can accept a Bootstrap Token from the MDM server instead of prompting for user authentication prior to installation. This only applies when 'BootstrapTokenAllowedForAuthentication' is 'true' in the SecurityInfoResponse.SecurityInfo response. This value is available for Apple silicon in macOS 11 and later.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - macOS:
             *    - introduced: 11.0
             *
             * - tvOS:
             *    - introduced: n/a
             */
            RequiresBootstrapToken: z.boolean().optional(),
            /** If 'true', this update is a Rapid Security Response.
             *
             * - iOS:
             *    - introduced: 16.2
             *
             * - macOS:
             *    - introduced: 13.1
             *
             * - tvOS:
             *    - introduced: 16.2
             */
            IsSecurityResponse: z.boolean().optional(),
            /** The build version for the Rapid Security Response update, for example, '13A999', which is the same as 'Build'.
             *
             * - iOS:
             *    - introduced: 16.2
             *
             * - macOS:
             *    - introduced: 13.1
             *
             * - tvOS:
             *    - introduced: 16.2
             */
            SupplementalBuildVersion: z.string().optional(),
            /** The Rapid Security Response OS version suffix, for example, '(a)'. Only present if this is a Rapid Security Response update.
             *
             * - iOS:
             *    - introduced: 16.2
             *
             * - macOS:
             *    - introduced: 13.1
             *
             * - tvOS:
             *    - introduced: 16.2
             */
            SupplementalOSVersionExtra: z.string().optional(),
        }),
    ),
});
