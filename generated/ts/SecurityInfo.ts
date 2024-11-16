export type SecurityInfo = {
    SecurityInfo: {
        HardwareEncryptionCaps: number | undefined;
        PasscodePresent: boolean | undefined;
        PasscodeCompliant: boolean | undefined;
        PasscodeCompliantWithProfiles: boolean | undefined;
        PasscodeLockGracePeriod: number | undefined;
        PasscodeLockGracePeriodEnforced: number | undefined;
        AutoLockTime: number | undefined;
        FDE_Enabled: boolean | undefined;
        FDE_HasPersonalRecoveryKey: boolean | undefined;
        FDE_HasInstitutionalRecoveryKey: boolean | undefined;
        FDE_PersonalRecoveryKeyCMS: string | undefined;
        FDE_PersonalRecoveryKeyDeviceKey: string | undefined;
        SystemIntegrityProtectionEnabled: boolean | undefined;
        FirewallSettings: {
            FirewallEnabled: boolean;
            BlockAllIncoming: boolean;
            StealthMode: boolean;
            Applications:
                | Array<
                    {
                        Allowed: boolean;
                        BundleID: string;
                        Name: string;
                    }
                >
                | undefined;
            LoggingEnabled: boolean | undefined;
            LoggingOption: string | undefined;
        } | undefined;
        FirmwarePasswordStatus: {
            PasswordExists: boolean;
            ChangePending: boolean;
            AllowOroms: boolean;
        } | undefined;
        ManagementStatus: {
            EnrolledViaDEP: boolean | undefined;
            UserApprovedEnrollment: boolean | undefined;
            IsUserEnrollment: boolean | undefined;
            IsActivationLockManageable: boolean | undefined;
        } | undefined;
        SecureBoot: {
            SecureBootLevel: string;
            ExternalBootLevel: string;
            ReducedSecurity: Array<string> | undefined;
        } | undefined;
        RemoteDesktopEnabled: boolean | undefined;
        AuthenticatedRootVolumeEnabled: boolean | undefined;
        BootstrapTokenAllowedForAuthentication: string | undefined;
        BootstrapTokenRequiredForSoftwareUpdate: boolean | undefined;
        BootstrapTokenRequiredForKernelExtensionApproval: boolean | undefined;
        IsRecoveryLockEnabled: boolean | undefined;
    };
};
