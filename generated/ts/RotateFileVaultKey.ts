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
export type RotateFileVaultKey = {
    /** The result of rotating the personal recovery key. */
    RotateResult: {
        /** A new personal recovery key that is encrypted using a 'ReplyEncryptionCertificate' as a CMS-compliant envelope. */
        EncryptedNewRecoveryKey: string | undefined;
    } | undefined;
};
