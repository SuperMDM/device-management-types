import { z } from 'https://deno.land/x/zod/mod.ts';

/** Used to send LOM requests ("PowerON", "PowerOFF", "Reset") to LOM Controller which then forwards the request to LOM Devices.
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 11.0
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
export const LOMDeviceRequest = z.object({
    /** An array of dictionaries that describes the status of each request. */
    ResponseList: z.array(
        z.object({
            /** If 'true', the request was successful. */
            DeviceRequestSuccess: z.boolean(),
            /** The unique identifier of the request for this response list item. */
            DeviceRequestUUID: z.string(),
            /** If present, a description of the error for a failed request. */
            DeviceRequestReturnError: z.string().optional(),
        }),
    ),
});
