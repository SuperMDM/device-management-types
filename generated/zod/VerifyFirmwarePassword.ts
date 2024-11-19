import { z } from 'https://deno.land/x/zod/mod.ts';

/** Verifies the device's firmware password. This command is not available on Apple silicon devices.
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 10.13
 *    - accessrights: None
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
export const VerifyFirmwarePasswordPayload = z.object({
    /** The password to verify. */
    Password: z.string(),
});

/** Verifies the device's firmware password. This command is not available on Apple silicon devices.
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 10.13
 *    - accessrights: None
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
export const VerifyFirmwarePasswordResponse = z.object({
    /** Command result. */
    VerifyFirmwarePassword: z.object({
        /** If 'true', the provided password matched the firmware password set for the device. */
        PasswordVerified: z.boolean(),
    }),
});
