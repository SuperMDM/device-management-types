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
export const LOMDeviceRequestPayload = z.object({
    /** An array of requests to perform. */
    RequestList: z.array(
        z.object({
            /** The requested action to perform on the device. */
            DeviceRequestType: z.string(),
            /** The unique identifier of the request. */
            DeviceRequestUUID: z.string(),
            /** The DNS name of the device. This should match the 'dNSName' in SCEP.PayloadContent.SubjectAltName or an equivalent in a PKCS12 identity. */
            DeviceDNSName: z.string(),
            /** An array that contains the IPv6 addresses for primary LOM-compatible Ethernet interfaces for the device. */
            PrimaryIPv6AddressList: z.array(z.string()),
            /** An array that contains the IPv6 addresses for secondary LOM-compatible Ethernet interfaces for the device. */
            SecondaryIPv6AddressList: z.array(z.string()),
            /** The LOM protocol version that the device supports. Provide the same value that 'LOMProtocolVersion' receives in the LOMSetupRequestResponse. */
            LOMProtocolVersion: z.number(),
        }),
    ),
});

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
export const LOMDeviceRequestResponse = z.object({
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
