/** This command allows the server to immediately lock the device. This command requires the Device Lock and Passcode Removal right.
 *
 * - iOS:
 *    - introduced: 4.0
 *    - accessrights: AllowPasscodeRemovalAndLock
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 10.7
 *    - accessrights: AllowPasscodeRemovalAndLock
 *    - devicechannel: true
 *    - userchannel: false
 *    - requiresdep: false
 *    - userenrollment: {mode:forbidden}
 *
 * - tvOS:
 *    - introduced: n/a
 *
 * - visionOS:
 *    - introduced: 2.0
 *    - accessrights: AllowPasscodeRemovalAndLock
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - accessrights: AllowPasscodeRemovalAndLock
 *    - supervised: false
 */
export type DeviceLock = {
    /** The message result if the command includes a message or phone number, which is one of the following values:
     ** 'Success': The message displayed successfully.
     ** 'DeviceInLostMode': The device is in Lost Mode.
     ** 'NoPasscodeSet': The message didn't display because there isn't a set passcode.
     ** 'Unknown': An unknown error occurred. */
    MessageResult: string | undefined;
};
