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
export type LOMDeviceRequest = {
    /** An array of dictionaries that describes the status of each request. */
    ResponseList: Array<
        {
            /** If 'true', the request was successful. */
            DeviceRequestSuccess: boolean;
            /** The unique identifier of the request for this response list item. */
            DeviceRequestUUID: string;
            /** If present, a description of the error for a failed request. */
            DeviceRequestReturnError: string | undefined;
        }
    >;
};
