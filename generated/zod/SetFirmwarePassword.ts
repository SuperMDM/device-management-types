import { z } from 'https://deno.land/x/zod/mod.ts';

/** Changes or clears the firmware password for the device. Requires the "Device lock and passcode removal right". This command is not available on Apple silicon devices.
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
export const SetFirmwarePassword = z.object({
    /** Command result. */
    SetFirmwarePassword: z.object({
        /** If 'true', the password change succeeded. */
        PasswordChanged: z.boolean(),
    }),
});
