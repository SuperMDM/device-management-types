import { z } from 'https://deno.land/x/zod/mod.ts';

/** Verifies the device's recovery lock password. (AppleSilicon devices only)
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 11.5
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
export const VerifyRecoveryLock = z.object({
    /** If 'true', the device verified the password. */
    PasswordVerified: z.boolean(),
});
