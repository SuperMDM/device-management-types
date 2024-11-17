/** Check-in protocol check out request and response.
 *
 * - iOS:
 *    - introduced: 4.0
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 10.7
 *    - devicechannel: true
 *    - userchannel: false
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
export type CheckOut = {
    /** The message type, which must have a value of 'CheckOut'. */
    MessageType: string;
    /** The topic to which the device subscribed. */
    Topic: string;
    /** The device's UDID (Unique Device ID).
     *
     * - iOS:
     *    - userenrollment: {mode:forbidden}
     *
     * - visionOS:
     *    - userenrollment: {mode:forbidden}
     */
    UDID: string | undefined;
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
    EnrollmentID: string | undefined;
};
