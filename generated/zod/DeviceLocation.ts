import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command allows the server to ask for the device's location if it is in MDM lost mode.
 *
 * - iOS:
 *    - introduced: 9.3
 *    - accessrights: None
 *    - supervised: true
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:forbidden}
 *
 * - macOS:
 *    - introduced: n/a
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
export const DeviceLocation = z.object({
    /** The latitude of the device's location. */
    Latitude: z.number(),
    /** The longitude of the device's location. */
    Longitude: z.number(),
    /** The radius of uncertainty for the location in meters, which is a negative value if the horizontal accuracy is unknown.
     *
     * - iOS:
     *    - introduced: 10.3
     */
    HorizontalAccuracy: z.number().optional(),
    /** The accuracy of the altitude value in meters, which is a negative value if the vertical accuracy is unknown.
     *
     * - iOS:
     *    - introduced: 10.3
     */
    VerticalAccuracy: z.number().optional(),
    /** The altitude of the device's location, which is a negative value if the altitude is unknown.
     *
     * - iOS:
     *    - introduced: 10.3
     */
    Altitude: z.number().optional(),
    /** The speed of the device in meters per second, which is a negative value if the speed is unknown.
     *
     * - iOS:
     *    - introduced: 10.3
     */
    Speed: z.number().optional(),
    /** The direction the device is traveling, which is a negative value if the course is unknown.
     *
     * - iOS:
     *    - introduced: 10.3
     */
    Course: z.number().optional(),
    /** The RFC 3339 timestamp of when the server determined the location of the device.
     *
     * - iOS:
     *    - introduced: 10.3
     */
    Timestamp: z.string().optional(),
});
