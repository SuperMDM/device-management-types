import { z } from 'https://deno.land/x/zod/mod.ts';

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
export const SettingsPayload = z.object({
    /** An array of dictionaries that contains the settings. */
    Settings: z.array(
        z.object({
            /** A string that identifies this setting. */
            Item: z.string(),
            /** A Base64-encoded image in either PNG or JPG format to use for wallpaper. */
            Image: z.string(),
            /** A number that indicates where to use the wallpaper, which is one of the following values:
             *
             ** '1': Lock screen
             ** '2': Home screen
             ** '3': Both lock and home screens.
             *
             * In iOS 16 and later, and iPadOS 17 and later, when you set the wallpaper for the first time, the system sets both the lock screen and home screen. After that, you can separately set each location. */
            Where: z.number(),
        }).optional(),
    ),
});

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
export const SettingsResponse = z.object({
    /** A dictionary that describes the results of configuring settings. */
    Settings: z.object({
        /** The status of the setting, which is one of the following values:
         ** 'Acknowledged': The device processed the command successfully.
         ** 'Error': An error occurred. See the 'ErrorChain' for more details. */
        Status: z.string(),
        /** An array of dictionaries that describes any errors that occurred. */
        ErrorChain: z.array(
            z.object({
                /** A dictionary that contains additional details about the error. */
                ANY: z.any(),
            }),
        ).optional(),
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
        Identifier: z.string().optional(),
    }).optional(),
});
