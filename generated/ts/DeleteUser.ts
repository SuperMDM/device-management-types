/** This command allows the server to delete a user that has an active account on the device.
 *
 * - iOS:
 *    - introduced: 9.3
 *    - accessrights: None
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:required,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:forbidden}
 *
 * - macOS:
 *    - introduced: 10.13
 *    - accessrights: None
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
export type DeleteUserPayload = {
    /** The user name of the account to delete. This key is required when the value for 'DeleteAllUsers' is absent or 'false'. */
    UserName: string | undefined;
    /** If 'true', the system deletes the account even if the user has data that's pending sync to the cloud. This value is available on iOS 9.3 and later.
     *
     * - macOS:
     *    - introduced: n/a
     */
    ForceDeletion: boolean | undefined;
    /** If 'true', the system attempts to delete all users from the device. If 'ForceDeletion' is 'false', the system generates an error instead and doesn't delete users who have data that's pending sync. This value is available in iOS 14 and later.
     *
     * - iOS:
     *    - introduced: 14.0
     *
     * - macOS:
     *    - introduced: n/a
     */
    DeleteAllUsers: boolean | undefined;
};
