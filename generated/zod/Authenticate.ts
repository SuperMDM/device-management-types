import { z } from 'https://deno.land/x/zod/mod.ts';

/** Check-in protocol authenticate request and response.
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
export const AuthenticateResponse = z.object({
    /** The device's name.
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
    DeviceName: z.string().optional(),
    /** The device's model name.
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
    ModelName: z.string().optional(),
    /** The device's model.
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
    Model: z.string().optional(),
    /** The message type, which must have a value of 'Authenticate'. */
    MessageType: z.string(),
    /** The topic to which the device subscribes. */
    Topic: z.string(),
    /** The device's UDID (Unique Device ID). This is required if the enrollment type is not user enrollment.
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
    /** The per-enrollment identifier for the device. Available in macOS 10.15 and iOS 13.0 and later. This is required if the enrollment type is user enrollment.
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
    /** The device's OS version.
     *
     * - iOS:
     *    - introduced: 9.0
     *    - accessrights: AllowQueryDeviceInformation
     *
     * - visionOS:
     *    - accessrights: AllowQueryDeviceInformation
     *
     * - watchOS:
     *    - introduced: 10.0
     *    - accessrights: AllowQueryDeviceInformation
     */
    OSVersion: z.string().optional(),
    /** The device's build version.
     *
     * - iOS:
     *    - introduced: 9.0
     *    - accessrights: AllowQueryDeviceInformation
     *
     * - visionOS:
     *    - accessrights: AllowQueryDeviceInformation
     *
     * - watchOS:
     *    - introduced: 10.0
     *    - accessrights: AllowQueryDeviceInformation
     */
    BuildVersion: z.string().optional(),
    /** The device's product name ('iPhone3,1').
     *
     * - iOS:
     *    - introduced: 9.0
     *    - accessrights: AllowQueryDeviceInformation
     *
     * - visionOS:
     *    - accessrights: AllowQueryDeviceInformation
     *
     * - watchOS:
     *    - introduced: 10.0
     *    - accessrights: AllowQueryDeviceInformation
     */
    ProductName: z.string().optional(),
    /** The device's serial number.
     *
     * - iOS:
     *    - introduced: 9.0
     *    - accessrights: AllowQueryDeviceInformation
     *    - userenrollment: {mode:forbidden}
     *
     * - macOS:
     *    - accessrights: AllowQueryDeviceInformation
     *    - userenrollment: {mode:forbidden}
     *
     * - visionOS:
     *    - accessrights: AllowQueryDeviceInformation
     *    - userenrollment: {mode:forbidden}
     *
     * - watchOS:
     *    - introduced: 10.0
     *    - accessrights: AllowQueryDeviceInformation
     */
    SerialNumber: z.string().optional(),
    /** The device's IMEI (International Mobile Station Equipment Identity).
     *
     * - iOS:
     *    - introduced: 9.0
     *    - accessrights: AllowQueryDeviceInformation
     *    - userenrollment: {mode:forbidden}
     *
     * - macOS:
     *    - introduced: n/a
     *
     * - tvOS:
     *    - introduced: n/a
     *
     * - visionOS:
     *    - accessrights: AllowQueryDeviceInformation
     *    - userenrollment: {mode:forbidden}
     *
     * - watchOS:
     *    - introduced: 10.0
     *    - accessrights: AllowQueryDeviceInformation
     */
    IMEI: z.string().optional(),
    /** The device's MEID (Mobile Equipment Identifier).
     *
     * - iOS:
     *    - introduced: 9.0
     *    - accessrights: AllowQueryDeviceInformation
     *    - userenrollment: {mode:forbidden}
     *
     * - macOS:
     *    - introduced: n/a
     *
     * - tvOS:
     *    - introduced: n/a
     *
     * - visionOS:
     *    - accessrights: AllowQueryDeviceInformation
     *    - userenrollment: {mode:forbidden}
     *
     * - watchOS:
     *    - introduced: 10.0
     *    - accessrights: AllowQueryDeviceInformation
     */
    MEID: z.string().optional(),
});
