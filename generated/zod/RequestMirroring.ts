import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command prompts the user to share their screen using AirPlay Mirroring.
 *
 * - iOS:
 *    - introduced: 7.0
 *    - accessrights: None
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 10.10
 *    - accessrights: None
 *    - devicechannel: true
 *    - userchannel: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
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
export const RequestMirroringPayload = z.object({
    /** The name of the AirPlay Mirroring destination. */
    DestinationName: z.string().optional(),
    /** The hardware address of the AirPlay Mirroring destination that identifies the device, in the format 'xx:xx:xx:xx:xx'. This value isn't case-sensitive. */
    DestinationDeviceID: z.string().optional(),
    /** The number of seconds, from '10' to '300', for the device to spend searching for the destination. The default value is '30'. */
    ScanTime: z.number().optional(),
    /** The screen-sharing password that the device uses when connecting to the destination. */
    Password: z.string().optional(),
});

/** This command prompts the user to share their screen using AirPlay Mirroring.
 *
 * - iOS:
 *    - introduced: 7.0
 *    - accessrights: None
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 10.10
 *    - accessrights: None
 *    - devicechannel: true
 *    - userchannel: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
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
export const RequestMirroringResponse = z.object({
    /** The result of the request. One of these values:
     ** 'Prompting': The user is receiving a prompt to share their screen.
     ** 'DestinationNotFound': The device is unable to reach the destination.
     ** 'Cancelled': The user canceled the request.
     ** 'Unknown': An unknown error occurred. */
    MirroringResult: z.string().optional(),
});
