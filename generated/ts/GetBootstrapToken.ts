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
export type GetBootstrapTokenPayload = {
    /** The message type, which must have a value of 'GetBootstrapToken'. */
    MessageType: string;
    /** If 'true', the device is awaiting a DeviceConfigured MDM command before proceeding through Setup Assistant. */
    AwaitingConfiguration: boolean | undefined;
};

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
export type GetBootstrapTokenResponse = {
    /** The current bootstrap token data for the device. */
    BootstrapToken: string | undefined;
};
