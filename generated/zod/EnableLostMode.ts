import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command allows the server to put the device in MDM lost mode, with a message, phone number, and footnote text. A message or phone number must be provided.
 *
 * - iOS:
 *    - introduced: 9.3
 *    - accessrights: None
 *    - supervised: true
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:forbidden}
 *
 * - macOS:
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
export const EnableLostModePayload = z.object({
    /** If present, display this text on the Lock screen. You must provide this value if you don't provide a value for 'PhoneNumber'. */
    Message: z.string().optional(),
    /** If present, display this phone number on the Lock screen. You must provide this value if you don't provide a value for 'Message'. */
    PhoneNumber: z.string().optional(),
    /** If present, display this text in place of Slide to Unlock. */
    Footnote: z.string().optional(),
});
