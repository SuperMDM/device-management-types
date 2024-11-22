import { z } from 'https://deno.land/x/zod/mod.ts';

/** Sets or clears the recovery lock password (Apple Silicon devices only). Requires the "Device lock and passcode removal right".
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
export const SetRecoveryLockPayload = z.object({
    /** If the device has a Recovery Lock password set, the system requires the current password. */
    CurrentPassword: z.string().optional(),
    /** The new password for Recovery Lock. Set as an empty string to clear the Recovery Lock password. */
    NewPassword: z.string(),
});
