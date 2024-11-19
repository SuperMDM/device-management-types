import { z } from 'https://deno.land/x/zod/mod.ts';

/** Check-in protocol get bootstrap token data request and response.
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 10.15
 *    - devicechannel: true
 *    - userchannel: false
 *    - supervised: true
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
export const GetBootstrapTokenPayload = z.object({
    /** The message type, which must have a value of 'GetBootstrapToken'. */
    MessageType: z.string(),
    /** If 'true', the device is awaiting a DeviceConfigured MDM command before proceeding through Setup Assistant. */
    AwaitingConfiguration: z.boolean().optional(),
});

/** Check-in protocol get bootstrap token data request and response.
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 10.15
 *    - devicechannel: true
 *    - userchannel: false
 *    - supervised: true
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
export const GetBootstrapTokenResponse = z.object({
    /** The current bootstrap token data for the device. */
    BootstrapToken: z.string().optional(),
});
