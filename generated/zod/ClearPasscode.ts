import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command allows the server to clear the passcode on the device. This command requires the Device Lock and Passcode Removal right.
 *
 * - iOS:
 *    - introduced: 4.0
 *    - accessrights: AllowPasscodeRemovalAndLock
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:forbidden}
 *    - userenrollment: {mode:forbidden}
 *
 * - macOS:
 *    - introduced: n/a
 *
 * - tvOS:
 *    - introduced: n/a
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: AllowPasscodeRemovalAndLock
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:forbidden}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - accessrights: AllowPasscodeRemovalAndLock
 *    - supervised: false
 */
export const ClearPasscodePayload = z.object({
    /** The unlock token value that the device provides in its 'TokenUpdateMessage' check-in message. */
    UnlockToken: z.string(),
});
