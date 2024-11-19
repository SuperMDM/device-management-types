/** Check-in protocol set bootstrap token data request and response.
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
export type SetBootstrapTokenPayload = {
    /** The message type, which must have a value of 'SetBootstrapToken'. */
    MessageType: string;
    /** The device's bootstrap token data. If this field is missing or zero length, the bootstrap token should be removed for this device. */
    BootstrapToken: string | undefined;
    /** If 'true', the device is awaiting a DeviceConfigured MDM command before proceeding through Setup Assistant. */
    AwaitingConfiguration: boolean | undefined;
};
