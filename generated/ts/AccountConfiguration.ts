/** When a macOS (v10.11 and later) device is configured via DEP to enroll in an MDM server and the DEP profile has the await_device_configuration flag set to true, the AccountConfiguration command can be sent to the device to have it create the local administrator account (thereby skipping the page to create this account in Setup Assistant). This command can only be sent to a macOS device that is in the AwaitingConfiguration state.
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 10.11
 *    - accessrights: None
 *    - devicechannel: true
 *    - userchannel: false
 *    - requiresdep: true
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
export type AccountConfigurationPayload = {
    /** If 'true', Setup Assistant skips the user interface for setting up primary accounts and disables autologin. If 'true', you must specify a value for 'AutoSetupAdminAccounts'. */
    SkipPrimarySetupAccountCreation: boolean | undefined;
    /** If 'true', Setup Assistant creates the primary accounts as regular users, and you must specify a value for 'AutoSetupAdminAccounts'. */
    SetPrimarySetupAccountAsRegularUser: boolean | undefined;
    /** The full name for the primary account. If present, Setup Assistant uses this value to prefill the Full Name field. However, Setup Assistant ignores this value if 'DontAutoPopulatePrimaryAccountInfo' is 'true'. This value is available in macOS 10.15 and later.
     *
     * - macOS:
     *    - introduced: 10.15
     */
    PrimaryAccountFullName: string | undefined;
    /** The account name for the primary account. If present, Setup Assistant uses this value to prefill the User Name field. However, Setup Assistant ignores this value if 'DontAutoPopulatePrimaryAccountInfo' is 'true'. This value is available in macOS 10.15 and later.
     *
     * - macOS:
     *    - introduced: 10.15
     */
    PrimaryAccountUserName: string | undefined;
    /** If 'true', Setup Assistant ignores the primary account information and requires the user to enter that information. If 'false', Setup Assistant prefills the Full Name field with 'PrimaryAccountFullName' and the User Name field with 'PrimaryAccountUserName'. This value is available in macOS 10.15 and later.
     *
     * - macOS:
     *    - introduced: 10.15
     */
    DontAutoPopulatePrimaryAccountInfo: boolean | undefined;
    /** If 'true', and you provide values for 'PrimaryAccountFullName' or 'PrimaryAccountUserName', Setup Assistant disables editing for the corresponding fields. 'DontAutoPopulatePrimaryAccountInfo' must also be 0 (or missing).
     * If the user's password is also available from authentication through ConfigurationURL, Setup Assistant automatically creates the primary account with that information and skips showing the user interface to view or edit these fields.
     * This value is available in macOS 10.15 and later.
     *
     * - macOS:
     *    - introduced: 10.15
     */
    LockPrimaryAccountInfo: boolean | undefined;
    /** A dictionary that describes the administrator account to create with Setup Assistant, which uses the first element and ignores additional elements. */
    AutoSetupAdminAccounts:
        | Array<
            {
                /** The short name of the user. */
                shortName: string;
                /** The full name of the user, which defaults to 'shortName' if not specified. */
                fullName: string | undefined;
                /** Data that contains the pre-created salted PBKDF2 SHA512 password hash for the account. */
                passwordHash: string | undefined;
                /** If 'true', this sets the account attribute to make the account hidden in the login window and Users & Groups. */
                hidden: boolean | undefined;
            }
        >
        | undefined;
    /** If present, this is the short name of the local account to manage, which can also be the account that results from setting 'AutoSetupAdminAccounts' to 'true'. Otherwise, only the local account that Setup Assistant creates is a managed account. This value is available in macOS 11 and later.
     *
     * - macOS:
     *    - introduced: 11.0
     */
    ManagedLocalUserShortName: string | undefined;
};
