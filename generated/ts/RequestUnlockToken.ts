/** This command requests an UnlockToken from the device. Pass this token to the ClearPasscode command to unlock the device.
 *
 * - iOS:
 *    - introduced: 5.0
 *    - deprecated: 6.1.6
 *    - accessrights: None
 *    - supervised: true
 *    - requiresdep: false
 *    - sharedipad: {mode:forbidden}
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
export type RequestUnlockTokenResponse = {
    /** The unlock token. Erasing the user partition invalidates this token. */
    UnlockToken: string;
};
