/** Queries the device for LOM setup information such as IP addresses, protocol version, etc. The MDM server must send this command prior to sending the LOMDeviceRequest command.
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
export type LOMSetupRequest = {
    /** An array that contains the IPv6 addresses for primary LOM-compatible Ethernet interfaces for the device. */
    PrimaryIPv6AddressList: Array<string>;
    /** An array that contains the IPv6 addresses for secondary LOM-compatible Ethernet interfaces for the device. */
    SecondaryIPv6AddressList: Array<string>;
    /** The LOM protocol version that the device supports. */
    LOMProtocolVersion: number;
};
