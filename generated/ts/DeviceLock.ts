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
export type DeviceLockPayload = {
    /** The message to display on the Lock screen of the device. This value doesn't apply to a shared iPad device. This value is available in iOS 4 and later, and macOS 10.14 and later.
     *
     * - iOS:
     *    - introduced: 7.0
     *    - sharedipad: {mode:ignored}
     *
     * - macOS:
     *    - introduced: 10.14
     *
     * - visionOS:
     *    - introduced: n/a
     */
    Message: string | undefined;
    /** The phone number to display on the Lock screen. This value doesn't apply to a shared iPad device. This value is available in iOS 7 and later and macOS 11.5 and later (for Apple silicon devices only).
     *
     * - iOS:
     *    - introduced: 7.0
     *    - sharedipad: {mode:ignored}
     *
     * - macOS:
     *    - introduced: 11.5
     *
     * - visionOS:
     *    - introduced: n/a
     */
    PhoneNumber: string | undefined;
    /** The six-character PIN for Find My. This value is available in macOS 10.8 and later.
     *
     * - iOS:
     *    - introduced: n/a
     *
     * - macOS:
     *    - introduced: 10.8
     *
     * - visionOS:
     *    - introduced: n/a
     *
     * - watchOS:
     *    - introduced: n/a
     */
    PIN: string | undefined;
};

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
export type DeviceLockResponse = {
    /** The message result if the command includes a message or phone number, which is one of the following values:
     ** 'Success': The message displayed successfully.
     ** 'DeviceInLostMode': The device is in Lost Mode.
     ** 'NoPasscodeSet': The message didn't display because there isn't a set passcode.
     ** 'Unknown': An unknown error occurred. */
    MessageResult: string | undefined;
};
