/** Check-in protocol get token data request and response.
 *
 * - iOS:
 *    - introduced: 17.0
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:true}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 14.0
 *    - devicechannel: true
 *    - userchannel: true
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - tvOS:
 *    - introduced: n/a
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: n/a
 */
export type GetTokenPayload = {
    /** A string that specifies this is a get-token request. */
    MessageType: string;
    /** A string that specifies the service for the requested token. */
    TokenServiceType: string;
    /** Parameters that the system uses to generate the token. */
    TokenParameters: {
        /** A security token to generate the server token. Required by the 'com.apple.watch.pairing' service type.
         *
         * - iOS:
         *    - sharedipad: {mode:forbidden}
         *    - userenrollment: {mode:forbidden}
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - visionOS:
         *    - introduced: n/a
         */
        SecurityToken: string | undefined;
        /** The identifier of the phone paired to the watch. Required by the 'com.apple.watch.pairing' service type.
         *
         * - iOS:
         *    - sharedipad: {mode:forbidden}
         *    - userenrollment: {mode:forbidden}
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - visionOS:
         *    - introduced: n/a
         */
        PhoneUDID: string | undefined;
        /** The identifier of the watch paired to the phone. Required by the 'com.apple.watch.pairing' service type.
         *
         * - iOS:
         *    - sharedipad: {mode:forbidden}
         *    - userenrollment: {mode:forbidden}
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - visionOS:
         *    - introduced: n/a
         */
        WatchUDID: string | undefined;
    } | undefined;
    /** The device's UDID.
     *
     * - iOS:
     *    - userenrollment: {mode:forbidden}
     *
     * - macOS:
     *    - userenrollment: {mode:forbidden}
     *
     * - visionOS:
     *    - userenrollment: {mode:forbidden}
     */
    UDID: string | undefined;
    /** A per-enrollment identifier that identifies the device for user enrollments.
     *
     * - iOS:
     *    - userenrollment: {mode:required}
     *
     * - macOS:
     *    - userenrollment: {mode:required}
     *
     * - visionOS:
     *    - userenrollment: {mode:required}
     */
    EnrollmentID: string | undefined;
    /** A per-enrollment identifier that identifies the user for user enrollments.
     *
     * - iOS:
     *    - introduced: n/a
     *
     * - macOS:
     *    - devicechannel: false
     *    - userenrollment: {mode:required}
     *
     * - visionOS:
     *    - introduced: n/a
     */
    EnrollmentUserID: string | undefined;
    /** On Shared iPad, this value returns the Managed Apple Account identifier of the user. When present, it indicates that the token is for the user channel. In macOS, this value returns the short name of the user.
     *
     * - iOS:
     *    - sharedipad: {mode:required}
     *
     * - macOS:
     *    - devicechannel: false
     *
     * - visionOS:
     *    - introduced: n/a
     */
    UserShortName: string | undefined;
    /** In macOS, this value returns the ID of the user. On Shared iPad, this value is 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF' to indicate that no authentication occurs.
     *
     * - iOS:
     *    - sharedipad: {mode:required}
     *
     * - macOS:
     *    - devicechannel: false
     *
     * - visionOS:
     *    - introduced: n/a
     */
    UserID: string | undefined;
    /** The full name of the user.
     *
     * - iOS:
     *    - introduced: n/a
     *
     * - macOS:
     *    - devicechannel: false
     *
     * - visionOS:
     *    - introduced: n/a
     */
    UserLongName: string | undefined;
};

/** Check-in protocol get token data request and response.
 *
 * - iOS:
 *    - introduced: 17.0
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:true}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 14.0
 *    - devicechannel: true
 *    - userchannel: true
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - tvOS:
 *    - introduced: n/a
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: n/a
 */
export type GetTokenResponse = {
    /** The token represented as data. If the token is a string value, this will be the UTF-8 encoded string data. */
    TokenData: string;
};
