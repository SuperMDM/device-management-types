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
export type SettingsPayload = {
    /** An array of dictionaries that contains the settings. */
    Settings: Array<
        {
            /** A string that identifies this setting. */
            Item: string;
            /** A Base64-encoded image in either PNG or JPG format to use for wallpaper. */
            Image: string;
            /** A number that indicates where to use the wallpaper, which is one of the following values:
             *
             ** '1': Lock screen
             ** '2': Home screen
             ** '3': Both lock and home screens.
             *
             * In iOS 16 and later, and iPadOS 17 and later, when you set the wallpaper for the first time, the system sets both the lock screen and home screen. After that, you can separately set each location. */
            Where: number;
        } | undefined
    >;
};

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
export type SettingsResponse = {
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
