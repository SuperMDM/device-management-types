/** This command allows the server to set settings on the device. These settings take effect on a one-time basis. The user may still be able to change the settings at a later time. This command requires the ApplySettings right.
 *
 * - iOS:
 *    - introduced: 5.0
 *    - accessrights: AllowSettings
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:true}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 10.9
 *    - accessrights: AllowSettings
 *    - devicechannel: true
 *    - userchannel: true
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - tvOS:
 *    - introduced: 9.0
 *    - accessrights: AllowSettings
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: AllowSettings
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - accessrights: AllowSettings
 *    - supervised: false
 */
export type Settings = {
    /** A dictionary that describes the results of configuring settings. */
    Settings: {
        /** The status of the setting, which is one of the following values:
         ** 'Acknowledged': The device processed the command successfully.
         ** 'Error': An error occurred. See the 'ErrorChain' for more details. */
        Status: string;
        /** An array of dictionaries that describes any errors that occurred. */
        ErrorChain:
            | Array<
                {
                    /** A dictionary that contains additional details about the error. */
                    ANY: any;
                }
            >
            | undefined;
        /** The app identifier to which this error applies.
         * For a watchOS app, the identifier is the watch's bundle identifier, which differs from the main bundle identifier for the iPhone to which the watch is paired.
         *
         * - iOS:
         *    - introduced: 7.0
         *
         * - macOS:
         *    - introduced: n/a
         *
         * - tvOS:
         *    - introduced: 10.2
         */
        Identifier: string | undefined;
    } | undefined;
};
