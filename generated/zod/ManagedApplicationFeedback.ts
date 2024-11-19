import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command queries the device for application feedback information. This command requires the App Management right. The response will not include apps that are managed by Declarative Device Management.
 *
 * - iOS:
 *    - introduced: 7.0
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 11.0
 *    - accessrights: AllowAppInstallation
 *    - devicechannel: false
 *    - userchannel: true
 *    - userenrollment: {mode:forbidden}
 *
 * - tvOS:
 *    - introduced: 10.2
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: n/a
 */
export const ManagedApplicationFeedbackPayload = z.object({
    /** The bundle identifiers of the managed apps. */
    Identifiers: z.array(z.string()),
    /** If 'true', delete the app's feedback dictionary after the server reads it. Apps that are managed by Declarative Device Management will be ignored. */
    DeleteFeedback: z.boolean().optional(),
});

/** This command queries the device for application feedback information. This command requires the App Management right. The response will not include apps that are managed by Declarative Device Management.
 *
 * - iOS:
 *    - introduced: 7.0
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 11.0
 *    - accessrights: AllowAppInstallation
 *    - devicechannel: false
 *    - userchannel: true
 *    - userenrollment: {mode:forbidden}
 *
 * - tvOS:
 *    - introduced: 10.2
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: n/a
 */
export const ManagedApplicationFeedbackResponse = z.object({
    /** An array of managed app feedback items. */
    ManagedApplicationFeedback: z.array(
        z.object({
            /** The app's bundle identifier. */
            Identifier: z.string(),
            /** The app's feedback. */
            Feedback: z.object({
                /** The app's feedback items. */
                ANY: z.any().optional(),
            }).optional(),
        }),
    ),
});
