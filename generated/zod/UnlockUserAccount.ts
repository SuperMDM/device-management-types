import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command allows the server to unlock a local user account that has been locked due to too many failed password attempts. Requires "Device lock and passcode removal right".
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 10.13
 *    - accessrights: DeviceLockAndRemovePasscode
 *    - devicechannel: true
 *    - userchannel: false
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
export const UnlockUserAccountPayload = z.object({
    /** The user name of the local account, which can be any local account on the system, not just a managed user account. */
    UserName: z.string(),
});
