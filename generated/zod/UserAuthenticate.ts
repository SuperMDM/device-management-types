import { z } from 'https://deno.land/x/zod/mod.ts';

/** Authenticate network or mobile users with MDM.
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 10.7
 *    - devicechannel: false
 *    - userchannel: true
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
export const UserAuthenticatePayload = z.object({
    /** The message type, which must have a value of 'UserAuthenticate'. */
    MessageType: z.string(),
    /** The device's UDID (Unique Device ID). */
    UDID: z.string(),
    /** Local mobile user's GUID or network user's GUID from an Open Directory record. */
    UserID: z.string(),
    /** A string provided by the client on second UserAuthenticate request after receiving 'DigestChallenge' from server on first UserAuthenticate request. */
    DigestResponse: z.string(),
});
