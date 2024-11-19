import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command allows the server to query for specific device information. It's supported in the user channel.
 *
 * - iOS:
 *    - introduced: 4.0
 *    - accessrights: Special Case
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:true}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 10.7
 *    - accessrights: Special Case
 *    - devicechannel: true
 *    - userchannel: true
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - tvOS:
 *    - introduced: 9.0
 *    - accessrights: Special Case
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: Special Case
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - accessrights: Special Case
 *    - supervised: false
 */
export const DeviceInformationPayload = z.object({
    /** An array of query dictionaries to get information about a device. */
    Queries: z.array(z.string()),
    /** This specifies a freshness code which appears in the resulting attestation. The value can contain up to 32 bytes of data. If specified, 'Queries' needs to contain 'DevicePropertiesAttestation'.
     * The MDM server can use this to prove that an attestation was recently generated. The system caches the most recently generated attestation on the device. If omitted or if the value matches the cached attestation, the system returns the cached attestation. To request a new attestation, provide a new freshness code. Requests for new attestations are rate limited. If it has been fewer than 7 days since the system generated an attestation, the device returns the cached attestation rather than generating a new one.
     * Available in iOS 16 and later, macOS 14 and later, tvOS 16 and later, and watchOS 10 and later. See the DeviceInformation attestation hardware support note for hardware requirements.
     *
     * - iOS:
     *    - introduced: 16.0
     *    - userenrollment: {mode:allowed}
     *
     * - macOS:
     *    - introduced: 14.0
     *
     * - tvOS:
     *    - introduced: 16.0
     *
     * - visionOS:
     *    - userenrollment: {mode:allowed}
     */
    DeviceAttestationNonce: z.string().optional(),
});

/** This command allows the server to query for specific device information. It's supported in the user channel.
 *
 * - iOS:
 *    - introduced: 4.0
 *    - accessrights: Special Case
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:true}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 10.7
 *    - accessrights: Special Case
 *    - devicechannel: true
 *    - userchannel: true
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - tvOS:
 *    - introduced: 9.0
 *    - accessrights: Special Case
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: Special Case
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - accessrights: Special Case
 *    - supervised: false
 */
export const DeviceInformationResponse = z.object({
    /** A dictionary that contains information about the device. */
    QueryResponses: z.object({
        /** The unique identifier of the device. */
        UDID: z.string(),
        /** The device identifier used in provisioning profiles. This value differs from the UDID on Macs with Apple silicon. Available in macOS 11.3 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 11.3
         *    - accessrights: n/a
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
        ProvisioningUDID: z.string().optional(),
        /** The contents of SettingsCommand.Command.Settings.OrganizationInfo.OrganizationInfo.
         *
         * - iOS:
         *    - introduced: 7.0
         *
         * - macOS:
         *    - introduced: 10.11
         *
         * - tvOS:
         *    - introduced: 9.0
         */
        OrganizationInfo: z.object({
            /** A string that describes the organization operating the MDM server. This value is available in iOS 7 and later, macOS 10.11 and later, and tvOS 9 and later. */
            OrganizationName: z.string(),
            /** The organization's address. Use the LF character ('&#10') to insert line breaks. This value is available in iOS 7 and later, macOS 10.11 and later, and tvOS 9 and later. */
            OrganizationAddress: z.string().optional(),
            /** The organization's phone number. This value is available in iOS 7 and later, macOS 10.11 and later, and tvOS 9 and later. */
            OrganizationPhone: z.string().optional(),
            /** The organization's support email address. This value is available in iOS 7 and later, macOS 10.11 and later, and tvOS 9 and later. */
            OrganizationEmail: z.string().optional(),
            /** A unique identifier for the various services a single organization manages. This value is available in iOS 7 and later, macOS 10.11 and later, and tvOS 9 and later. */
            OrganizationMagic: z.string().optional(),
        }).optional(),
        /** The contents of SettingsCommand.Command.Settings.MDMOptions.MDMOptions.
         *
         * - iOS:
         *    - introduced: 7.0
         *
         * - macOS:
         *    - introduced: 11.0
         *
         * - tvOS:
         *    - introduced: 9.0
         */
        MDMOptions: z.object({
            /** If 'true', a supervised device registers itself with Activation Lock when the user enables Find My. Unsupervised devices ignore this value. This value is available in iOS 7 and later, macOS 11 and later, and tvOS 9 and later.
             *
             * - visionOS:
             *    - introduced: n/a
             *
             * - watchOS:
             *    - introduced: n/a
             */
            ActivationLockAllowedWhileSupervised: z.boolean().optional(),
            /** If 'true', the server supports Bootstrap Token commands. This value is available in macOS 11 and later.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - macOS:
             *    - introduced: 11.0
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
            BootstrapTokenAllowed: z.boolean().optional(),
            /** If 'true', the device can accept a Bootstrap Token from the MDM server instead of prompting for user authentication prior to installation. This only applies when 'BootstrapTokenAllowedForAuthentication' is 'true' in the SecurityInfoResponse.SecurityInfo response. This value is available for Apple silicon devices in macOS 11 and later.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - macOS:
             *    - introduced: 11.0
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
            PromptUserToAllowBootstrapTokenForAuthentication: z.boolean()
                .optional(),
        }).optional(),
        /** The date of the last iCloud backup. Available in iOS 8 and later.
         *
         * - iOS:
         *    - introduced: 8.0
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - tvOS:
         *    - introduced: n/a
         *
         * - watchOS:
         *    - introduced: n/a
         */
        LastCloudBackupDate: z.date().optional(),
        /** If 'true' on the device channel, the device is still waiting for a DeviceConfiguredCommand to continue through Setup Assistant.
         * If 'true' on the user channel (Shared iPad only), the device is still waiting for a UserConfiguredCommand to continue through Setup Assistant and finish login.
         *
         * - iOS:
         *    - introduced: 9.0
         *
         * - macOS:
         *    - introduced: 10.11
         *
         * - tvOS:
         *    - introduced: 10.2
         *
         * - visionOS:
         *    - introduced: 2.0
         */
        AwaitingConfiguration: z.boolean().optional(),
        /** If 'true', the device has an active iTunes Store account. Requires the App Installation access right.
         *
         * - iOS:
         *    - introduced: 7.0
         *
         * - macOS:
         *    - introduced: 10.9
         *
         * - tvOS:
         *    - introduced: 9.0
         *
         * - visionOS:
         *    - introduced: n/a
         */
        iTunesStoreAccountIsActive: z.boolean().optional(),
        /** A hash of the logged-in iTunes Store account. Also see GetVppUserRequest. Requires the App Installation access right.
         *
         * - iOS:
         *    - introduced: 8.0
         *
         * - macOS:
         *    - introduced: 10.10
         *
         * - tvOS:
         *    - introduced: 9.0
         *
         * - visionOS:
         *    - introduced: n/a
         */
        iTunesStoreAccountHash: z.string().optional(),
        /** The device name. Requires the Device Information access right. */
        DeviceName: z.string(),
        /** The operating system version. Requires the Device Information access right. */
        OSVersion: z.string(),
        /** The OS update rapid security response version letter.
         *
         * - iOS:
         *    - introduced: 16.1
         *
         * - macOS:
         *    - introduced: 13.0
         *
         * - tvOS:
         *    - introduced: 16.1
         */
        SupplementalOSVersionExtra: z.string().optional(),
        /** The operating system version. Requires the Device Information access right. */
        BuildVersion: z.string(),
        /** The supplemental OS build version.
         *
         * - iOS:
         *    - introduced: 16.1
         *
         * - macOS:
         *    - introduced: 13.0
         *
         * - tvOS:
         *    - introduced: 16.1
         */
        SupplementalBuildVersion: z.string().optional(),
        /** The model name, such as iPhone. Requires the Device Information access right. */
        ModelName: z.string(),
        /** The model. Requires the Device Information access right.
         *
         * - visionOS:
         *    - introduced: n/a
         */
        Model: z.string().optional(),
        /** The device's hardware model number including region info, for example, 'MK1A3LL/A'. Requires the Device Information access right. Requires Apple silicon on macOS. */
        ModelNumber: z.string(),
        /** If 'true', the macOS device uses an Apple silicon chip.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 12.0
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
        IsAppleSilicon: z.boolean().optional(),
        /** The product name, such as iPad8,12. Requires the Device Information access right. */
        ProductName: z.string(),
        /** The serial number. Requires the Device Information access right. */
        SerialNumber: z.string(),
        /** The total capacity in floating-point base-10 gigabytes (GB) on iOS and macOS 12 or later. The capacity is in base-2 gibibytes (GiB) on macOS 11 and earlier. Requires the Device Information access right. Available in iOS 4 and later, and macOS 10.7 and later.
         *
         * - tvOS:
         *    - introduced: n/a
         */
        DeviceCapacity: z.number().optional(),
        /** The available capacity in floating-point base-10 gigabytes (GB) on iOS and macOS 12 or later. The capacity is in base-2 gibibytes (GiB) on macOS 11 and earlier. Requires the Device Information access right. Available in iOS 4 and later, and macOS 10.7 and later.
         *
         * - tvOS:
         *    - introduced: n/a
         */
        AvailableDeviceCapacity: z.number().optional(),
        /** The International Mobile Equipment Identity (IMEI) number. Requires the Device Information access right. Available as of iOS 4 and deprecated in iOS 16.
         *
         * - iOS:
         *    - deprecated: 16.0
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
        IMEI: z.string().optional(),
        /** The mobile equipment identifier (MEID) number. Requires the Device Information access right. Available as of iOS 4 and deprecated in iOS 16.
         *
         * - iOS:
         *    - deprecated: 16.0
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
        MEID: z.string().optional(),
        /** The modem firmware version. Requires the Device Information access right. Available in iOS 4.0 and later.
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
        ModemFirmwareVersion: z.string().optional(),
        /** The cellular technology type, which is one of the following values:
         *
         ** '0': None
         ** '1': GSM
         ** '2': CDMA
         ** '3': GSM and CDMA
         *
         * Requires the Device Information access right. Available in iOS 4.2.6 and later.
         *
         * - iOS:
         *    - introduced: 4.2.6
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
        CellularTechnology: z.number().optional(),
        /** The battery level, between '0.0' and '1.0', or '-1.0' if MDM can't determine the battery level. Requires the Device Information access right. Available in iOS 5 and later, and macOS 13.3 and later.
         *
         * - iOS:
         *    - introduced: 5.0
         *
         * - macOS:
         *    - introduced: 13.3
         *
         * - tvOS:
         *    - introduced: n/a
         */
        BatteryLevel: z.number().optional(),
        /** If 'true', the device has an internal battery.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 13.3
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
        HasBattery: z.boolean().optional(),
        /** If 'true', it's a supervised device. Requires the Device Information access right. Available in iOS 6 and later, macOS 10.15 and later, and tvOS 9 and later.
         *
         * - iOS:
         *    - introduced: 6.0
         *
         * - macOS:
         *    - introduced: 10.15
         *
         * - tvOS:
         *    - introduced: 9.0
         */
        IsSupervised: z.boolean().optional(),
        /** If 'true', the device is a Shared iPad. Requires the Device Information access right. Available in iOS 9.3 and later.
         *
         * - iOS:
         *    - introduced: 9.3
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
        IsMultiUser: z.boolean().optional(),
        /** If 'true', the device has enabled a device locator service, such as Find My. Requires the Device Information access right. Available in iOS 7 and later.
         *
         * - iOS:
         *    - introduced: 7.0
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - tvOS:
         *    - introduced: n/a
         */
        IsDeviceLocatorServiceEnabled: z.boolean().optional(),
        /** If 'true', the device has enabled Activation Lock. Requires the Device Information access right. Available as of iOS 7 and macOS 10.9, and deprecated in iOS 16 and macOS 13.
         *
         * - iOS:
         *    - introduced: 7.0
         *    - deprecated: 16.0
         *
         * - macOS:
         *    - introduced: 10.9
         *    - deprecated: 13.0
         *
         * - tvOS:
         *    - introduced: n/a
         *
         * - visionOS:
         *    - introduced: n/a
         *
         * - watchOS:
         *    - deprecated: 10.0
         */
        IsActivationLockEnabled: z.boolean().optional(),
        /** If 'true', the device supports Activation Lock. Also see 'IsActivationLockManageable' in SecurityInfoResponse.SecurityInfo.ManagementStatus. Available in macOS 10.9 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.9
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
        IsActivationLockSupported: z.boolean().optional(),
        /** If 'true', the device is in Do Not Disturb (DND) mode. This value is 'true' even if DND is only in effect for a locked device. Requires the Device Information access right. Available in iOS 7 and later.
         *
         * - iOS:
         *    - introduced: 7.0
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - tvOS:
         *    - introduced: n/a
         */
        IsDoNotDisturbInEffect: z.boolean().optional(),
        /** If 'true', the device can receive 'PowerON', 'PowerOFF', and 'Reset' commands from a lights-out management (LOM) controller. Available in macOS 11 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 11.0
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
        SupportsLOMDevice: z.boolean().optional(),
        /** The device identifier. Requires the Device Information access right. Available in tvOS 6 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - tvOS:
         *    - introduced: 9.0
         *
         * - visionOS:
         *    - introduced: n/a
         *
         * - watchOS:
         *    - introduced: n/a
         */
        DeviceID: z.string().optional(),
        /** The device identifier for Exchange Active Sync (EAS). Requires the Device Information access right. Available in iOS 7 and later.
         *
         * - iOS:
         *    - introduced: 7.0
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - tvOS:
         *    - introduced: n/a
         *
         * - watchOS:
         *    - introduced: n/a
         */
        EASDeviceIdentifier: z.string().optional(),
        /** If 'true', the device has enabled iCloud backup. Requires the Device Information access right. Available in iOS 7.1 and later.
         *
         * - iOS:
         *    - introduced: 7.1
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - tvOS:
         *    - introduced: n/a
         *
         * - watchOS:
         *    - introduced: n/a
         */
        IsCloudBackupEnabled: z.boolean().optional(),
        /** An array of the directory GUIDs of the logged-in managed users. If one of these users is currently logged in to the console, the 'CurrentConsoleManagedUser' key returns the GUID of that user. Requires the Device Information access right. Available in macOS 10.11 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.11
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
        ActiveManagedUsers: z.array(z.string()).optional(),
        /** The contents of DeviceInformationResponse.QueryResponses.OSUpdateSettings. Requires the Device Information access right. Available in macOS 10.11 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.11
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
        OSUpdateSettings: z.object({
            /** The URL to the software update catalog the client is using. This value is available in macOS 10.11 and later. */
            CatalogURL: z.string().optional(),
            /** If 'true', 'CatalogURL' is the default catalog. This value is available in macOS 10.11 and later. */
            IsDefaultCatalog: z.boolean(),
            /** The date of the last software update scan. This value is available in macOS 10.11 and later. */
            PreviousScanDate: z.date(),
            /** The result code of last software update scan; '”0”' = success. This value is available in macOS 10.11 and later. This key was removed in macOS 15 as it has been unsupported since macOS 11.
             *
             * - macOS:
             *    - deprecated: 11.0
             *    - removed: 15.0
             */
            PreviousScanResult: z.string().optional(),
            /** If 'true', start a new scan. This value is available in macOS 10.11 and later. */
            PerformPeriodicCheck: z.boolean(),
            /** The preference to automatically check for app updates. This value is available in macOS 10.11 and later. */
            AutoCheckEnabled: z.boolean(),
            /** The preference to download app updates in the background. This value is available in macOS 10.11 and later. */
            BackgroundDownloadEnabled: z.boolean(),
            /** The preference to automatically install app updates. This value is available in macOS 10.11 and later. */
            AutomaticAppInstallationEnabled: z.boolean(),
            /** The preference to automatically install operating system updates. This value is available in macOS 10.11 and later. */
            AutomaticOSInstallationEnabled: z.boolean(),
            /** The preference to automatically install system data files and security updates. This value is available in macOS 10.11 and later. */
            AutomaticSecurityUpdatesEnabled: z.boolean(),
        }).optional(),
        /** The local host name from Bonjour. Available in macOS 10.11 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.11
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
        LocalHostName: z.string().optional(),
        /** The host name. Available in macOS 10.11 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.11
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
        HostName: z.string().optional(),
        /** The contents of DeviceInformationResponse.QueryResponses.AutoSetupAdminAccountsItem, which Setup Assistant automatically created during DEP enrollment. Requires the Device Information access right. Available in macOS 10.11 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.11
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
        AutoSetupAdminAccounts: z.array(
            z.object({
                /** The 'GeneratedUID' of the administrator account. This value is available in macOS 10.11 and later. */
                GUID: z.string(),
                /** The short name of the administrator account. This value is available in macOS 10.11 and later. */
                shortName: z.string(),
            }),
        ).optional(),
        /** If 'true', the device has enabled System Integrity Protection. Requires the Device Information access right. Available in macOS 10.12 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.12
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
        SystemIntegrityProtectionEnabled: z.boolean().optional(),
        /** If 'true', the device has enabled Managed Lost Mode. Requires the Device Information access right. Available in iOS 9.3 and later.
         *
         * - iOS:
         *    - introduced: 9.3
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - tvOS:
         *    - introduced: n/a
         *
         * - visionOS:
         *    - introduced: n/a
         */
        IsMDMLostModeEnabled: z.boolean().optional(),
        /** The maximum number of users that can use this shared iPad device. Starting with iOS 13.4, the value that returns is always '32'. Requires the Device Information access right. Available in iOS 9.3 and later.
         *
         * - iOS:
         *    - introduced: 9.3
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
        MaximumResidentUsers: z.number().optional(),
        /** The estimated number of users that can use this shared iPad device, according to the space available on the device and each user's quota. Requires the Device Information access right. Available in iOS 14 and later.
         *
         * - iOS:
         *    - introduced: 14.0
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
        EstimatedResidentUsers: z.number().optional(),
        /** The quota size in megabytes for each user on this shared iPad device. Requires the Device Information access right. Available in iOS 13.4 and later.
         *
         * - iOS:
         *    - introduced: 13.4
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
        QuotaSize: z.number().optional(),
        /** The number of users currently on this shared iPad device. Requires the Device Information access right. Available in iOS 13.4 and later.
         *
         * - iOS:
         *    - introduced: 13.4
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
        ResidentUsers: z.number().optional(),
        /** The timeout interval for the user session. A value of '0' indicates that there's no timeout.
         *
         * - iOS:
         *    - introduced: 14.5
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
        UserSessionTimeout: z.number().optional(),
        /** The timeout interval for the temporary session. A value of '0' indicates that there's no timeout.
         *
         * - iOS:
         *    - introduced: 14.5
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
        TemporarySessionTimeout: z.number().optional(),
        /** If 'true', the device only allows temporary sessions.
         *
         * - iOS:
         *    - introduced: 14.5
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
        TemporarySessionOnly: z.boolean().optional(),
        /** The list of domains that the device suggests on the Shared iPad login screen. Available in iOS 16 and later.
         *
         * - iOS:
         *    - introduced: 16.0
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
        ManagedAppleIDDefaultDomains: z.array(z.string()).optional(),
        /** The grace period for Shared iPad online authentication (in days). A value of '0' indicates that the device requires online authentication for every login. Available in iOS 16 and later.
         *
         * - iOS:
         *    - introduced: 16.0
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
        OnlineAuthenticationGracePeriod: z.number().optional(),
        /** If 'true', skip the language and country/region panes for new users on Shared iPad.
         *
         * - iOS:
         *    - introduced: 16.2
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
        SkipLanguageAndLocaleSetupForNewUsers: z.boolean().optional(),
        /** The push token for the user-channel connection, in the same format as in TokenUpdateRequest. MDM ignores this query for the device channel. Requires the Device Information access right. Available in iOS 9.3 and later, and macOS 10.12 and later.
         *
         * - iOS:
         *    - introduced: 9.3
         *
         * - macOS:
         *    - introduced: 10.12
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
        PushToken: z.string().optional(),
        /** If 'true', the device has enabled diagnostic submission. Requires the Device Information access right. Available in iOS 9.3 and later.
         *
         * - iOS:
         *    - introduced: 9.3
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - tvOS:
         *    - introduced: n/a
         */
        DiagnosticSubmissionEnabled: z.boolean().optional(),
        /** If 'true', the device is sharing app analytics. Requires the Device Information access right. Available in iOS 9.3 and later.
         *
         * - iOS:
         *    - introduced: 9.3
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - tvOS:
         *    - introduced: n/a
         */
        AppAnalyticsEnabled: z.boolean().optional(),
        /** The current Internet Assigned Numbers Authority (IANA) time zone database name. Requires the Device Information access right. Available in iOS 14 and later, and tvOS 14 and later.
         *
         * - iOS:
         *    - introduced: 14.0
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - tvOS:
         *    - introduced: 14.0
         */
        TimeZone: z.string().optional(),
        /** The integrated circuit card (ICC) identifier for the installed SIM card. Requires the Network Information access right. Available as of iOS 4 and deprecated in iOS 16.
         *
         * - iOS:
         *    - deprecated: 16.0
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
        ICCID: z.string().optional(),
        /** The Bluetooth media access control (MAC) address. Requires the Network Information access right.
         *
         * - watchOS:
         *    - introduced: n/a
         */
        BluetoothMAC: z.string().optional(),
        /** The Wi-Fi MAC address. Requires the Network Information access right. */
        WiFiMAC: z.string(),
        /** The primary Ethernet MAC address. Requires the Network Information access right. Available in macOS 10.7 and later.
         *
         * - iOS:
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
        EthernetMAC: z.string().optional(),
        /** The name of the current carrier network. Requires the Network Information access right. Available as of iOS 4 and deprecated in iOS 16.
         *
         * - iOS:
         *    - deprecated: 16.0
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
        CurrentCarrierNetwork: z.string().optional(),
        /** Apple no longer supports this query. Use 'SubscriberCarrierNetwork' instead.
         *
         * - iOS:
         *    - removed: 5.0
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
        SIMCarrierNetwork: z.string().optional(),
        /** The name of the home carrier network. Requires the Network Information access right. Available as of iOS 5 and deprecated in iOS 16.
         *
         * - iOS:
         *    - introduced: 5.0
         *    - deprecated: 16.0
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
        SubscriberCarrierNetwork: z.string().optional(),
        /** The version of the carrier settings. Requires the Network Information access right. Available as of iOS 4 and deprecated in iOS 16.
         *
         * - iOS:
         *    - deprecated: 16.0
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
        CarrierSettingsVersion: z.string().optional(),
        /** The raw phone number without punctuation and including the country code. Requires the Network Information access right. Available as of iOS 4 and deprecated in iOS 16.
         *
         * - iOS:
         *    - deprecated: 16.0
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
        PhoneNumber: z.string().optional(),
        /** If 'true', the device has enabled data roaming. Requires the Network Information access right. Available in iOS 5 and later.
         *
         * - iOS:
         *    - introduced: 5.0
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
        DataRoamingEnabled: z.boolean().optional(),
        /** If 'true', the device has enabled voice roaming, which isn't available for all carriers. Requires the Network Information access right. Requires the Device Information access right. Available as of iOS 5 and deprecated in iOS 16.
         *
         * - iOS:
         *    - introduced: 5.0
         *    - deprecated: 16.0
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
        VoiceRoamingEnabled: z.boolean().optional(),
        /** If 'true,' the device has enabled Personal Hotspot, which isn't available for all carriers. Requires the Network Information access right. Available in iOS 7.0 and later.
         *
         * - iOS:
         *    - introduced: 7.0
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
        PersonalHotspotEnabled: z.boolean().optional(),
        /** If 'true', the device is network-tethered. Requires the Network Information access right. Available in iOS 10.3 and later.
         *
         * - iOS:
         *    - introduced: 10.3
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
        IsNetworkTethered: z.boolean().optional(),
        /** If 'true', the device is roaming. Requires the Network Information access right. IAvailable as of iOS 4.2 and deprecated in iOS 16.
         *
         * - iOS:
         *    - introduced: 4.2
         *    - deprecated: 16.0
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
        IsRoaming: z.boolean().optional(),
        /** Apple no longer supports this query. Use 'SubscriberMCC' instead.
         *
         * - iOS:
         *    - removed: 4.2.6
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
        SIMMCC: z.string().optional(),
        /** Apple no longer supports this query. Use 'SubscriberMNC' instead.
         *
         * - iOS:
         *    - removed: 4.2.6
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
        SIMMNC: z.string().optional(),
        /** The home Mobile Country Code (MCC). Requires the Network Information access right. Available as of iOS 4.2.6 and deprecated in iOS 16.
         *
         * - iOS:
         *    - introduced: 4.2.6
         *    - deprecated: 16.0
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
        SubscriberMCC: z.string().optional(),
        /** The key to get the home Mobile Network Code (MNC). Requires the Network Information access right. Available as of iOS 4.2.6 and deprecated in iOS 16.
         *
         * - iOS:
         *    - introduced: 4.2.6
         *    - deprecated: 16.0
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
        SubscriberMNC: z.string().optional(),
        /** The current mobile country code (MCC). Requires the Network Information access right. Available as of iOS 4 and deprecated in iOS 16.
         *
         * - iOS:
         *    - deprecated: 16.0
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
        CurrentMCC: z.string().optional(),
        /** The current mobile network code (MNC). Requires the Network Information access right. Available as of iOS 4 and deprecated in iOS 16.
         *
         * - iOS:
         *    - deprecated: 16.0
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
        CurrentMNC: z.string().optional(),
        /** The contents of DeviceInformationResponse.QueryResponses.ServiceSubscriptionProperty. Requires the Network Information access right.
         *
         * - iOS:
         *    - introduced: 12.0
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
        ServiceSubscriptions: z.array(
            z.object({
                /** The version of the carrier settings. This value is available in iOS 12 and later. */
                CarrierSettingsVersion: z.string(),
                /** The name of the current carrier network. This value is available in iOS 12 and later. */
                CurrentCarrierNetwork: z.string(),
                /** The current mobile country code (MCC). This value is available in iOS 12 and later. */
                CurrentMCC: z.string(),
                /** The current mobile network code (MNC). This value is available in iOS 12 and later. */
                CurrentMNC: z.string(),
                /** The integrated circuit card identifier (ICCID) value. This value is available in iOS 12 and later. */
                ICCID: z.string(),
                /** The eSIM identifier. This value is available in iOS 14 and later.
                 *
                 * - iOS:
                 *    - introduced: 14.0
                 *
                 * - macOS:
                 *    - introduced: n/a
                 *
                 * - tvOS:
                 *    - introduced: n/a
                 */
                EID: z.string().optional(),
                /** The device International Mobile Equipment Identity (IMEI) number. This value is available in iOS 12 and later. */
                IMEI: z.string(),
                /** If 'true', this subscription is the preference for data. This value is available in iOS 12 and later. */
                IsDataPreferred: z.boolean(),
                /** If 'true', the phone is roaming. This value is available in iOS 12 and later. */
                IsRoaming: z.boolean(),
                /** If 'true', this subscription is the preference for voice. This value is available in iOS 12 and later. */
                IsVoicePreferred: z.boolean(),
                /** The label of this subscription. This value is available in iOS 12 and later. */
                Label: z.string(),
                /** The unique identifier for this subscription. This value is available in iOS 12 and later. */
                LabelID: z.string(),
                /** The device Mobile Equipment Identifier (MEID) number. This query is available in iOS 12 and later. */
                MEID: z.string(),
                /** The raw phone number without punctuation and including country code. This value is available in iOS 12 and later. */
                PhoneNumber: z.string(),
                /** The description of the slot that contains the SIM representing this subscription. This value is available in iOS 12 and later. */
                Slot: z.string(),
                /** The name of the home carrier network. This value is available in iOS 16 and later.
                 *
                 * - iOS:
                 *    - introduced: 16.0
                 *
                 * - macOS:
                 *    - introduced: n/a
                 *
                 * - tvOS:
                 *    - introduced: n/a
                 */
                SubscriberCarrierNetwork: z.string().optional(),
            }),
        ).optional(),
        /** If 'true', the EraseDeviceCommand requires a PIN. Available in macOS 11 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 11.0
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
        PINRequiredForEraseDevice: z.boolean().optional(),
        /** If 'true', the DeviceLockCommand requires a PIN. Available in macOS 11 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 11.0
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
        PINRequiredForDeviceLock: z.boolean().optional(),
        /** If 'true', the device supports iOS/iPadOS app installs through MDM. Available in macOS 11 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 11.0
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
        SupportsiOSAppInstalls: z.boolean().optional(),
        /** The device identifier that you use to look up available OS updates through <https://gdmf.apple.com/v2/pmv>. Available in iOS 15 and later, and macOS 12 and later.
         *
         * - iOS:
         *    - introduced: 15.0
         *    - userenrollment: {mode:forbidden}
         *
         * - macOS:
         *    - introduced: 12.0
         *    - userenrollment: {mode:forbidden}
         *
         * - tvOS:
         *    - introduced: n/a
         *
         * - visionOS:
         *    - userenrollment: {mode:forbidden}
         *
         * - watchOS:
         *    - introduced: n/a
         */
        SoftwareUpdateDeviceID: z.string().optional(),
        /** The device settings that control which updates appear in the Software Update pane in Settings. Available in iOS 14.5 and later.
         *
         * - iOS:
         *    - introduced: 14.5
         *    - userenrollment: {mode:forbidden}
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
        SoftwareUpdateSettings: z.object({
            /** Which software updates to present to the user.
             ** '0' (the default) allows all updates.
             ** '1' allows only older updates.
             ** '2' allows only newer updates.
             * No effect if the device qualifies for only a single update. */
            RecommendationsCadence: z.number(),
        }).optional(),
        /** The current state of settable accessibility settings. Available in iOS 16 and later.
         *
         * - iOS:
         *    - introduced: 16.0
         *    - supervised: true
         *    - sharedipad: {mode:allowed,devicechannel:false}
         *    - userenrollment: {mode:forbidden}
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
         *    - supervised: true
         */
        AccessibilitySettings: z.object({
            /** If 'true', the device has enabled bold text. */
            BoldTextEnabled: z.boolean(),
            /** If 'true', the device has enabled increase contrast.
             *
             * - watchOS:
             *    - introduced: n/a
             */
            IncreaseContrastEnabled: z.boolean().optional(),
            /** If 'true', the device has enabled reduced motion. */
            ReduceMotionEnabled: z.boolean(),
            /** If 'true', the device has enabled reduced transparency. */
            ReduceTransparencyEnabled: z.boolean(),
            /** The accessibility text size apps that support dynamic text use. 0 is the smallest value, and 11 is the largest available.
             * '-1' indicates that the current size is unknown or hasn't been explicitly set. */
            TextSize: z.number(),
            /** If 'true', the device has enabled touch accommodations. */
            TouchAccommodationsEnabled: z.boolean(),
            /** If 'true', the device has enabled voiceover. */
            VoiceOverEnabled: z.boolean(),
            /** If 'true', the device has enabled zoom. */
            ZoomEnabled: z.boolean(),
            /** If 'true', the device has enabled grayscale display.
             *
             * - iOS:
             *    - introduced: n/a
             */
            GrayscaleEnabled: z.boolean().optional(),
        }).optional(),
        /** The key to get an attestation of the device's properties. Available in
         * iOS 16 and later, macOS 14 and later, tvOS 16 and later, and watchOS 10 and
         * later. See the DeviceInformation attestation hardware support note for hardware
         * requirements.
         * The value is an array of certificates in DER form that forms a certificate chain. The chain is rooted with the Apple CA 'Apple Enterprise Attestation Root CA'. The first array item is the leaf certificate. The leaf certificate contains custom OIDs describing a device. Which OIDs are present in the certificate depend on the OS version of the device and the type of enrollment. If Apple's attestation servers are unable to verify a device property it will provide a blank value, omit the OID entirely, or refuse to issue an attestation certificate.
         * The following OIDs were introduced in iOS 16, iPadOS 16, tvOS 16, watchOS 9.l0, visionOS 1.0 and macOS 14.0:
         ** 1.2.840.113635.100.8.9.1 serial number -- This is the serial number of the device. It is omitted if the enrollment is a User Enrollment.
         ** 1.2.840.113635.100.8.9.2 UDID  -- For a Mac this has the same value as the ProvisioningUDID key in the DeviceInformation response, and does not match the UDID used elsewhere in the MDM protocol. It is omitted if the enrollment is a User Enrollment.
         ** 1.2.840.113635.100.8.10.2 sepOS version  -- This is the version of the operating system running on the Secure Enclave at the time the attestation is generated. In most cases this matches the version of the main operating system.
         ** 1.2.840.113635.100.8.11.1 Freshness code  -- This is the freshness code. For an explanation of the expected value, see the DeviceAttestationNonce key in the DeviceInformation request. This may not match the requested freshness code if a cached attestation was returned.
         * The following OIDs were introduced in iOS 17.2, iPadOS 17.2, tvOS 17.2, watchOS 10.2, visionOS 1.l0, and macOS 14.2:
         ** 1.2.840.113635.100.8.9.4 Software Update Device ID -- This is an identifier of the device model. It is expected to match the SoftwareUpdateDeviceID in the DeviceInformation response. This is the device identifier to use when looking up available OS updates through https://gdmf.apple.com/v2/pmv.
         ** 1.2.840.113635.100.8.10.1 OS Version -- This is the version of iOS, iPadOS or tvOS running on the device at the time the attestation is generated.
         ** 1.2.840.113635.100.8.10.3 LLB Version -- This is the version of the Low Level Bootloader firmware running on the device at the time the attestation is generated. For more information about the boot process, see the documentation of the boot process in the Apple Platform Security guide.
         * The following OIDs were introduced in macOS 14.2:
         ** 1.2.840.113635.100.8.13.1 System Integrity Protection (SIP) status -- This indicates whether SIP is enabled or disabled at the time the attestation is generated. 0 indicates enabled, 1 indicates disabled.
         ** 1.2.840.113635.100.8.13.2 Secure boot status -- This describes part of the configuration of the LocalPolicy at the time the attestation is generated. The possible values are 'Full Security', 'Reduced Security', or 'Permissive Security'. For a description of these values see the Apple Platform Security guide.
         ** 1.2.840.113635.100.8.13.3 Third party kernel extensions allowed -- This indicates whether third party kernel extensions are allowed. A value of 0 indicates third party kernel extensions are not allowed. Any other value means that some kinds of third party kernel extensions are allowed.
         *
         * - iOS:
         *    - introduced: 16.0
         *    - userenrollment: {mode:allowed}
         *
         * - macOS:
         *    - introduced: 14.0
         *
         * - tvOS:
         *    - introduced: 16.0
         *
         * - visionOS:
         *    - userenrollment: {mode:allowed}
         */
        DevicePropertiesAttestation: z.array(z.string()).optional(),
        /** Specifies whether the device can perform an EraseDeviceCommand using Erase All Content and Settings (EACS), which is one of the following values:
         *
         ** 'success': The device supports EACS.
         ** 'not supported': The device is too old to support EACS.
         ** 'unknown failure': A problem occurred for which there isn't a more specific error message.
         ** '(other string)': A reason why the device can't perform EACS, such as “System is not sealed”
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 13.3
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
        EACSPreflight: z.string().optional(),
    }),
});
