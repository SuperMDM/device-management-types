import { z } from 'https://deno.land/x/zod/mod.ts';

/** Check-in protocol get token data request and response.
 *
 * - iOS:
 *    - introduced: 17.0
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:true}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 14.0
 *    - devicechannel: true
 *    - userchannel: true
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - tvOS:
 *    - introduced: n/a
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: n/a
 */
export const GetToken = z.object({
    /** The token represented as data. If the token is a string value, this will be the UTF-8 encoded string data. */
    TokenData: z.string(),
});
