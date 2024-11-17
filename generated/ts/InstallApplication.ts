/** This command allows the server to install an application on a device. If the app is already being managed, this command will update the app. This command will fail for apps that are managed by Declarative Device Management. macOS change - 10.9 user channel for VPP, 10.10 device channel, 10.11 both.
 *
 * - iOS:
 *    - introduced: 5.0
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 10.9
 *    - accessrights: AllowAppInstallation
 *    - devicechannel: true
 *    - userchannel: true
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
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
 *    - introduced: 10.0
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 */
export type InstallApplication = {
    /** The app's bundle identifier, if the user accepted the request.
     * For a watchOS app, the identifier is the watch's bundle identifier, which differs from the main bundle identifier for the iPhone to which the watch is paired. */
    Identifier: string | undefined;
    /** The app's installation state, if the user accepted the request. If this value is 'NeedsRedemption', the server must send a redemption code to complete the app installation. */
    State: string | undefined;
    /** The reason, if installation fails. macOS only returns "Other". */
    RejectionReason: string | undefined;
};
