import { z } from "https://deno.land/x/zod/mod.ts";
export const SecurityInfo = z.object({
  SecurityInfo: z.object({
    HardwareEncryptionCaps: z.number().optional(),
    PasscodePresent: z.boolean().optional(),
    PasscodeCompliant: z.boolean().optional(),
    PasscodeCompliantWithProfiles: z.boolean().optional(),
    PasscodeLockGracePeriod: z.number().optional(),
    PasscodeLockGracePeriodEnforced: z.number().optional(),
    AutoLockTime: z.number().optional(),
    FDE_Enabled: z.boolean().optional(),
    FDE_HasPersonalRecoveryKey: z.boolean().optional(),
    FDE_HasInstitutionalRecoveryKey: z.boolean().optional(),
    FDE_PersonalRecoveryKeyCMS: z.string().optional(),
    FDE_PersonalRecoveryKeyDeviceKey: z.string().optional(),
    SystemIntegrityProtectionEnabled: z.boolean().optional(),
    FirewallSettings: z.object({
      FirewallEnabled: z.boolean(),
      BlockAllIncoming: z.boolean(),
      StealthMode: z.boolean(),
      Applications: z.array(
        z.object({
          Allowed: z.boolean(),
          BundleID: z.string(),
          Name: z.string(),
        }),
      ).optional(),
      LoggingEnabled: z.boolean().optional(),
      LoggingOption: z.string().optional(),
    }).optional(),
    FirmwarePasswordStatus: z.object({
      PasswordExists: z.boolean(),
      ChangePending: z.boolean(),
      AllowOroms: z.boolean(),
    }).optional(),
    ManagementStatus: z.object({
      EnrolledViaDEP: z.boolean().optional(),
      UserApprovedEnrollment: z.boolean().optional(),
      IsUserEnrollment: z.boolean().optional(),
      IsActivationLockManageable: z.boolean().optional(),
    }).optional(),
    SecureBoot: z.object({
      SecureBootLevel: z.string(),
      ExternalBootLevel: z.string(),
      ReducedSecurity: z.array(z.string()).optional(),
    }).optional(),
    RemoteDesktopEnabled: z.boolean().optional(),
    AuthenticatedRootVolumeEnabled: z.boolean().optional(),
    BootstrapTokenAllowedForAuthentication: z.string().optional(),
    BootstrapTokenRequiredForSoftwareUpdate: z.boolean().optional(),
    BootstrapTokenRequiredForKernelExtensionApproval: z.boolean().optional(),
    IsRecoveryLockEnabled: z.boolean().optional(),
  }),
});
