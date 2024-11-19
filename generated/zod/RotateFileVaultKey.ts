import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command allows for changing a device's FileVaultMaster password.
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 10.9
 *    - accessrights: DeviceLockAndRemovePasscode
 *    - devicechannel: true
 *    - userchannel: false
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
export const RotateFileVaultKeyPayload = z.object({
    /** The type of FileVault key you want to change the password for. Set this value to 'personal' and set a value for 'Password' in the 'FileVaultUnlock' dictionary to enable unlocking a device with a password. Set this value to 'institutional' and set values for 'PrivateKeyExport' and 'PrivateKeyExportPassword' in the 'FileVaultUnlock' dictionary. */
    KeyType: z.string(),
    /** A dictionary that contains FileVault unlock options. */
    FileVaultUnlock: z.object({
        /** A FileVault user's password, or if using a CoreStorage volume, the personal recovery key. */
        Password: z.string().optional(),
        /** The data for a .p12 export of the private key for the current institutional recovery key, which requires that 'KeyType' is 'institutional'. The system ignores this key on APFS volumes.
         *
         * - macOS:
         *    - deprecated: 10.15
         */
        PrivateKeyExport: z.string().optional(),
        /** The password for 'PrivateKeyExport'. Either 'Password' or both 'PrivateKeyExport' and 'PrivateKeyExportPassword' must be present. The system ignores this key on APFS volumes.
         *
         * - macOS:
         *    - deprecated: 10.15
         */
        PrivateKeyExportPassword: z.string().optional(),
    }),
    /** A DER-encoded certificate for creating a new institutional recovery key, which the system requires if 'KeyType' is 'institutional'. */
    NewCertificate: z.string().optional(),
    /** A DER-encoded certificate for encrypting the new personal recovery key in a wrapper conforming to the IETF Cryptographic Message Syntax (CMS) standard. */
    ReplyEncryptionCertificate: z.string().optional(),
});

/** This command allows for changing a device's FileVaultMaster password.
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 10.9
 *    - accessrights: DeviceLockAndRemovePasscode
 *    - devicechannel: true
 *    - userchannel: false
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
export const RotateFileVaultKeyResponse = z.object({
    /** The result of rotating the personal recovery key. */
    RotateResult: z.object({
        /** A new personal recovery key that is encrypted using a 'ReplyEncryptionCertificate' as a CMS-compliant envelope. */
        EncryptedNewRecoveryKey: z.string().optional(),
    }).optional(),
});
