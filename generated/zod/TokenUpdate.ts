import { z } from 'https://deno.land/x/zod/mod.ts';

/** Check-in protocol token update request and response.
 *
 * - iOS:
 *    - introduced: 4.0
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:true}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 10.7
 *    - devicechannel: true
 *    - userchannel: true
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - tvOS:
 *    - introduced: 10.2
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - supervised: false
 */
export const TokenUpdateResponse = z.object({
    /** If 'true', the device is not on console.
     *
     * - iOS:
     *    - introduced: n/a
     *
     * - macOS:
     *    - introduced: 10.11
     *    - devicechannel: false
     *
     * - visionOS:
     *    - introduced: n/a
     *
     * - watchOS:
     *    - introduced: n/a
     */
    NotOnConsole: z.boolean().optional(),
    /** The message type, which must have a value of 'TokenUpdate'. */
    MessageType: z.string(),
    /** The topic the device subscribes to. */
    Topic: z.string(),
    /** The device's UDID.
     *
     * - iOS:
     *    - userenrollment: {mode:forbidden}
     *
     * - macOS:
     *    - userenrollment: {mode:forbidden}
     *
     * - visionOS:
     *    - userenrollment: {mode:forbidden}
     */
    UDID: z.string().optional(),
    /** The per-enrollment identifier for the device. Available in macOS 10.15 and iOS 13.0 and later.
     *
     * - iOS:
     *    - introduced: 13.0
     *    - userenrollment: {mode:required}
     *
     * - macOS:
     *    - introduced: 10.15
     *    - userenrollment: {mode:required}
     *
     * - tvOS:
     *    - introduced: n/a
     *
     * - visionOS:
     *    - userenrollment: {mode:required}
     *
     * - watchOS:
     *    - introduced: n/a
     */
    EnrollmentID: z.string().optional(),
    /** The per-enrollment identifier for the user. Available in macOS 10.15 and iOS 13.0 and later.
     *
     * - iOS:
     *    - introduced: n/a
     *
     * - macOS:
     *    - introduced: 10.15
     *    - devicechannel: false
     *    - userenrollment: {mode:required}
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
    EnrollmentUserID: z.string().optional(),
    /** On Shared iPad: This is the Managed Apple Account identifier of the user on Shared iPad. It indicates that the token is for the user channel.
     * On macOS, this is the short name of the user.
     *
     * - iOS:
     *    - introduced: 9.3
     *    - sharedipad: {mode:required}
     *
     * - macOS:
     *    - devicechannel: false
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
    UserShortName: z.string().optional(),
    /** On macOS: This is the ID of the user.
     * On Shared iPad: This is always 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF' to indicate that no authentication will occur.
     *
     * - iOS:
     *    - introduced: 9.3
     *    - sharedipad: {mode:required}
     *
     * - macOS:
     *    - devicechannel: false
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
    UserID: z.string().optional(),
    /** The full name of the user.
     *
     * - iOS:
     *    - introduced: n/a
     *
     * - macOS:
     *    - devicechannel: false
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
    UserLongName: z.string().optional(),
    /** The Push token for the device. */
    Token: z.string(),
    /** The magic string that has to be included in the push notification message. */
    PushMagic: z.string(),
    /** The data that can be used to unlock the device. If provided, the server should remember this data and send it with when trying to Clear the Passcode.
     *
     * - iOS:
     *    - accessrights: AllowPasscodeRemovalAndLock
     *    - sharedipad: {mode:forbidden}
     *    - userenrollment: {mode:forbidden}
     *
     * - macOS:
     *    - introduced: n/a
     *
     * - visionOS:
     *    - accessrights: AllowPasscodeRemovalAndLock
     *    - userenrollment: {mode:forbidden}
     *
     * - watchOS:
     *    - accessrights: AllowPasscodeRemovalAndLock
     */
    UnlockToken: z.string().optional(),
    /** If 'true' from the device channel, the device is awaiting a Release Device from Await Configuration MDM command before proceeding through Setup Assistant.
     * If 'true' from the user channel (Shared iPad only), the device is awaiting a UserConfiguredCommand MDM command before proceeding through Setup Assistant.
     *
     * - iOS:
     *    - introduced: 9.0
     *
     * - macOS:
     *    - introduced: 10.11
     *    - userchannel: false
     *
     * - watchOS:
     *    - introduced: n/a
     */
    AwaitingConfiguration: z.boolean().optional(),
});
