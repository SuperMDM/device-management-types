import { z } from 'https://deno.land/x/zod/mod.ts';

/** Check-in protocol declarative management request and response.
 *
 * - iOS:
 *    - introduced: 15.0
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:true}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 13.0
 *    - devicechannel: true
 *    - userchannel: true
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - tvOS:
 *    - introduced: 16.0
 *    - supervised: false
 *    - requiresdep: false
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
 *    - requiresdep: false
 */
export const DeclarativeManagementResponse = z.object({
    /** The message type, which must have a value of 'DeclarativeManagement'. */
    MessageType: z.string(),
    /** The type of operation the declaration is requesting. This key must be one of these values:
     ** 'tokens': For fetching synchronization tokens from the server
     ** 'declaration-items': For fetching the declaration manifest from the server
     ** 'status': For sending a status report to the server
     ** 'declaration/…/…': For fetching a specific declaration from the server. Include the declaration type and identifier separated by forward slashes ('/)'. */
    Endpoint: z.string(),
    /** A Base64-encoded JSON object using the SynchronizationTokens schema. */
    Data: z.string().optional(),
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
    /** The per-enrollment identifier for the device.
     *
     * - iOS:
     *    - userenrollment: {mode:required}
     *
     * - macOS:
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
    /** A per-enrollment identifier that identifies the user for user enrollments.
     *
     * - iOS:
     *    - introduced: n/a
     *
     * - macOS:
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
    /** On Shared iPad, this value returns the Managed Apple Account of the user. When present indicates that the token is for the user channel. On macOS, this value always returns the short name of the user.
     *
     * - iOS:
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
    /** On macOS, this value always returns the ID of the user. On Shared iPad, this value is always set to FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF to indicate that no authentication will occur.
     *
     * - iOS:
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
});

/** This command allows the server to turn on the Declarative Management engine on the device (the first time it is used), or to trigger a Declarative Management synchronization operation.
 *
 * - iOS:
 *    - introduced: 15.0
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:true}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 13.0
 *    - devicechannel: true
 *    - userchannel: true
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - tvOS:
 *    - introduced: 16.0
 *    - supervised: false
 *    - requiresdep: false
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
export const DeclarativeManagementPayload = z.object({
    /** The base64-encoded Declarative Management JSON request using a TokensResponse. */
    Data: z.string().optional(),
});
