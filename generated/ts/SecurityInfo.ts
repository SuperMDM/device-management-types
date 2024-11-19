/** This command queries the device for security-related information. Queries are available if the MDM host has the Security Query right.
 *
 * - iOS:
 *    - introduced: 4.0
 *    - accessrights: AllowQuerySecurity
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 10.7
 *    - accessrights: AllowQuerySecurity
 *    - devicechannel: true
 *    - userchannel: true
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - tvOS:
 *    - introduced: 9.0
 *    - accessrights: AllowQuerySecurity
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: AllowQuerySecurity
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - accessrights: AllowQuerySecurity
 *    - supervised: false
 */
export type SecurityInfoResponse = {
    /** A dictionary that contains security-related information. */
    SecurityInfo: {
        /** An integer that indicates the underlying hardware encryption capabilities of the device, which is one of the following values:
         ** '1': Block-level encryption
         ** '2': File-level encryption
         ** '3': Both block-level and file-level encryption
         * For a device to have data protection, 'HardwareEncryptionCaps' must be '3' and 'PasscodePresent' must 'true'.
         * This value is available in iOS 4 and later, and tvOS 6 and later.
         *
         * - macOS:
         *    - introduced: n/a
         */
        HardwareEncryptionCaps: number | undefined;
        /** If 'true', the device has a passcode. This value is available in iOS 4 and later, and tvOS 6 and later.
         *
         * - iOS:
         *    - userenrollment: {mode:forbidden}
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - visionOS:
         *    - userenrollment: {mode:forbidden}
         */
        PasscodePresent: boolean | undefined;
        /** If 'true', the user's passcode is compliant with all requirements on the device, including Exchange and other accounts. This value is available in iOS 4 and later, and tvOS 6 and later.
         *
         * - macOS:
         *    - introduced: n/a
         */
        PasscodeCompliant: boolean | undefined;
        /** If 'true', the user's passcode is compliant with requirements from profiles. This key doesn't apply to User-Enrolled devices. This value is available in iOS 4 and later, and tvOS 6 and later.
         *
         * - iOS:
         *    - userenrollment: {mode:forbidden}
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - visionOS:
         *    - userenrollment: {mode:forbidden}
         */
        PasscodeCompliantWithProfiles: boolean | undefined;
        /** The user preference for the number of seconds before a locked screen requires the device passcode to unlock it. This value is only available for Shared iPad.
         *
         * - iOS:
         *    - introduced: 9.3.2
         *    - userenrollment: {mode:forbidden}
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - visionOS:
         *    - userenrollment: {mode:forbidden}
         */
        PasscodeLockGracePeriod: number | undefined;
        /** The enforced value for the number of seconds before a locked screen requires the device passcode to unlock it. If a device has a passcode, changing 'PasscodeLockGracePeriod' to a larger value doesn't take effect until the user logs out or removes the passcode. This value is only available for Shared iPad.
         *
         * - iOS:
         *    - introduced: 9.3.2
         *    - userenrollment: {mode:forbidden}
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - visionOS:
         *    - userenrollment: {mode:forbidden}
         */
        PasscodeLockGracePeriodEnforced: number | undefined;
        /** The number of seconds before a device goes to sleep after being idle. This value is only available on Shared iPad in iOS 17 and later.
         *
         * - iOS:
         *    - introduced: 17.0
         *    - sharedipad: {mode:required}
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
        AutoLockTime: number | undefined;
        /** If 'true', the device has enabled FileVault full disk encryption (FDE). This value is available in macOS 10.9 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.9
         *    - userchannel: false
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
        FDE_Enabled: boolean | undefined;
        /** If 'true', FileVault FDE has a personal recovery key. This value is available in macOS 10.9 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.9
         *    - userchannel: false
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
        FDE_HasPersonalRecoveryKey: boolean | undefined;
        /** If 'true', FileVault FDE has an institutional recovery key. This value is available in macOS 10.9 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.9
         *    - userchannel: false
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
        FDE_HasInstitutionalRecoveryKey: boolean | undefined;
        /** If the FileVault personal recovery key has enabled escrow with a recovery key, this value contains the key. The certificate from the FDERecoveryKeyEscrow profile encrypts the key and wraps it as CMS data. This value is available in macOS 10.13 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.13
         *    - userchannel: false
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
        FDE_PersonalRecoveryKeyCMS: string | undefined;
        /** If the FileVault personal recovery key has enabled escrow with a recovery key, this value is the device serial number. This is the value that displays to the user at the EFI login window as part of the help message if they enter their password incorrectly three times. The server also uses this value as an index when saving the device personal recovery key. This replaces the 'recordNumber' that the server returned in the previous escrow mechanism. This value is available in macOS 10.13 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.13
         *    - userchannel: false
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
        FDE_PersonalRecoveryKeyDeviceKey: string | undefined;
        /** If 'true', System Integrity Protection (SIP) is active on the device. This value is available in macOS 10.12 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.12
         *    - userchannel: false
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
        SystemIntegrityProtectionEnabled: boolean | undefined;
        /** A dictionary that contains the firewall settings. This value is available in macOS 10.12 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.12
         *    - userchannel: false
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
        FirewallSettings: {
            /** If 'true', the firewall is on. */
            FirewallEnabled: boolean;
            /** If 'true', the firewall blocks all incoming connections. */
            BlockAllIncoming: boolean;
            /** If true, stealth mode is active for the firewall. */
            StealthMode: boolean;
            /** An array of dictionaries that describes the allowed applications.
             *
             * - macOS:
             *    - introduced: 10.12
             *    - userenrollment: {mode:forbidden}
             */
            Applications:
                | Array<
                    {
                        /** If 'true', the app is an allowed app. */
                        Allowed: boolean;
                        /** The app's bundle identifier. */
                        BundleID: string;
                        /** The app's display name if it's determinable from the 'BundleID'. */
                        Name: string;
                    }
                >
                | undefined;
            /** If 'true', logging is enabled.
             *
             * - macOS:
             *    - introduced: 12.0
             */
            LoggingEnabled: boolean | undefined;
            /** The type of logging emitted by the firewall.
             *
             * - macOS:
             *    - introduced: 12.0
             */
            LoggingOption: string | undefined;
        } | undefined;
        /** A dictionary that contains the status of the EFI firmware password. This value is available in macOS 10.13 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.13
         *    - userchannel: false
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
        FirmwarePasswordStatus: {
            /** If 'true', the device has an EFI firmware password. */
            PasswordExists: boolean;
            /** If 'true', a firmware password change is pending. A device restart is necessary for this change to take effect. Until then, additional attempts to change the password fail.
             * If 'true', the other values show the current state of the device, not the state after a restart. */
            ChangePending: boolean;
            /** If 'true', enable ROMs. */
            AllowOroms: boolean;
        } | undefined;
        /** A dictionary that contains the status of the device's MDM enrollment.
         *
         * - iOS:
         *    - introduced: 13.0
         *
         * - macOS:
         *    - introduced: 10.13.2
         *
         * - tvOS:
         *    - introduced: 13.0
         */
        ManagementStatus: {
            /** If 'true', the device enrolled in MDM through the Device Enrollment Program (DEP). This value is available in macOS 10.13.2 and later.
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
            EnrolledViaDEP: boolean | undefined;
            /** If 'true', the enrollment was user-approved. If 'false', the device may reject certain security-sensitive payloads or commands. This value is available in macOS 10.13.2 and later.
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
            UserApprovedEnrollment: boolean | undefined;
            /** If 'true', the device is user-enrolled. This value is available in iOS 13 and later, and macOS 10.15 and later.
             *
             * - macOS:
             *    - introduced: 10.15
             */
            IsUserEnrollment: boolean | undefined;
            /** If 'true', the type of enrollment allows the MDM to manage Activation Lock for this device. This value is available in macOS 10.15 and later.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - macOS:
             *    - introduced: 10.15
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
            IsActivationLockManageable: boolean | undefined;
        } | undefined;
        /** A dictionary that contains the device's Secure Boot settings. This value is available in macOS 10.15 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.15
         *    - userchannel: false
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
        SecureBoot: {
            /** The security level for the bootable operating system versions. */
            SecureBootLevel: string;
            /** The device's external boot level, which indicates whether it allows booting from an external device, disallows it, or doesn't support it. */
            ExternalBootLevel: string;
            /** Reports which security features the user disables in 'recoveryOS'. This property is only present for Apple silicon when 'SecureBootLevel' is 'medium'.
             * Available in iOS 11 and later.
             *
             * - macOS:
             *    - introduced: 11.0
             */
            ReducedSecurity: Array<string> | undefined;
        } | undefined;
        /** If 'true', Remote Desktop is active on the device. This value is available in macOS 10.14.4 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 10.14.4
         *    - userchannel: false
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
        RemoteDesktopEnabled: boolean | undefined;
        /** If 'true', the system booted using an Authenticated Root Volume. This value is available in macOS 11 and later.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 11.0
         *    - userchannel: false
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
        AuthenticatedRootVolumeEnabled: boolean | undefined;
        /** This value specifies whether the Secure Enclave Processor (SEP) supports and allows secure operations to use the Bootstrap Token. The value is automatically set for devices enrolled through the Device Enrollment Program (DEP). The user can also manually set this value in the RecoveryOS.
         * This value is available for Apple silicon in macOS 11 and later. Not available for user enrollment.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 11.0
         *    - userchannel: false
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
        BootstrapTokenAllowedForAuthentication: string | undefined;
        /** If 'true', the device can accept a Bootstrap Token from the MDM server instead of prompting for user authentication prior to installation. This only applies when 'BootstrapTokenAllowedForAuthentication' is 'true' in the SecurityInfoResponse.SecurityInfo response.
         * This value is available for Apple silicon in macOS 11 and later. Not available for user enrollment.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 11.0
         *    - userchannel: false
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
        BootstrapTokenRequiredForSoftwareUpdate: boolean | undefined;
        /** If 'true', the device can accept a Bootstrap Token from the MDM server instead of prompting for user authentication prior to enabling kernel extensions. This includes enabling kexts through the 'com.apple.syspolicy.kernel-extension-policy' payload or triggering the 'RestartDevice' command with 'RebuildKernelCache' set to 'true'. This only applies when 'BootstrapTokenAllowedForAuthentication' is 'true' in the SecurityInfoResponse.SecurityInfo response.
         * This value is available for Apple silicon in macOS 11 and later. Not available for user enrollment.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 11.0
         *    - userchannel: false
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
        BootstrapTokenRequiredForKernelExtensionApproval: boolean | undefined;
        /** If 'true', a password is required to enter recovery (see SetRecoveryLockCommand). Available in macOS 11.5 and later and only on Apple silicon devices.
         *
         * - iOS:
         *    - introduced: n/a
         *
         * - macOS:
         *    - introduced: 11.5
         *    - userchannel: false
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
        IsRecoveryLockEnabled: boolean | undefined;
    };
};
