/** Changes or clears the firmware password for the device. Requires the "Device lock and passcode removal right". This command is not available on Apple silicon devices.
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 10.13
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
export type SetFirmwarePasswordPayload = {
    /** The current password, which you must set if the device has a firmware password. */
    CurrentPassword: string | undefined;
    /** The new firmware password. Set to an empty string to clear the password. The characters in this value must consist of low-ASCII, printable characters ('0x20' through '0x7E') to ensure that all characters are enterable on the EFI login screen. */
    NewPassword: string;
    /** If 'true', enable ROMs. */
    AllowOroms: boolean | undefined;
};

/** Changes or clears the firmware password for the device. Requires the "Device lock and passcode removal right". This command is not available on Apple silicon devices.
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 10.13
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
export type SetFirmwarePasswordResponse = {
    /** Command result. */
    SetFirmwarePassword: {
        /** If 'true', the password change succeeded. */
        PasswordChanged: boolean;
    };
};
