/** This command allows a server to invite a user to join a program. This command issues the invitation, but does not allow the server to monitor whether the user has joined the program. This command is supported in the user channel. This command will yield a NotNow status until the user exits Setup Assistant. This command does not work with Account Driven Device Enrollment.
 *
 * - iOS:
 *    - introduced: 7.0
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:false,userchannel:true}
 *    - userenrollment: {mode:forbidden}
 *
 * - macOS:
 *    - introduced: 10.9
 *    - accessrights: None
 *    - devicechannel: false
 *    - userchannel: true
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
export type InviteToProgram = {
    /** The result of the command. */
    InvitationResult: string;
};
