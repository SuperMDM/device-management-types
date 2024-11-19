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
export type LOMDeviceRequestPayload = {
    /** An array of requests to perform. */
    RequestList: Array<
        {
            /** The requested action to perform on the device. */
            DeviceRequestType: string;
            /** The unique identifier of the request. */
            DeviceRequestUUID: string;
            /** The DNS name of the device. This should match the 'dNSName' in SCEP.PayloadContent.SubjectAltName or an equivalent in a PKCS12 identity. */
            DeviceDNSName: string;
            /** An array that contains the IPv6 addresses for primary LOM-compatible Ethernet interfaces for the device. */
            PrimaryIPv6AddressList: Array<string>;
            /** An array that contains the IPv6 addresses for secondary LOM-compatible Ethernet interfaces for the device. */
            SecondaryIPv6AddressList: Array<string>;
            /** The LOM protocol version that the device supports. Provide the same value that 'LOMProtocolVersion' receives in the LOMSetupRequestResponse. */
            LOMProtocolVersion: number;
        }
    >;
};

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
export type LOMDeviceRequestResponse = {
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
