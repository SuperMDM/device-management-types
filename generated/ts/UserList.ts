/** This command allows the server to query for a list of users that have an active account on the device.
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
export type UserList = {
    /** An array of user dictionaries that contains information about the active accounts. */
    Users: Array<
        {
            /** The user name for the account. In macOS, this is the short name of the user account. This value is available in iOS 9.3 and later, and macOS 10.13 and later. */
            UserName: string;
            /** The user's full name. This value is available in macOS 10.13 and later.
             *
             * - iOS:
             *    - introduced: n/a
             */
            FullName: string | undefined;
            /** The user's unique identifier. This value is available in macOS 10.13 and later.
             *
             * - iOS:
             *    - introduced: n/a
             */
            UID: number | undefined;
            /** The user's 'GeneratedUID'. This value is available in macOS 10.13 and later.
             *
             * - iOS:
             *    - introduced: n/a
             */
            UserGUID: string | undefined;
            /** If 'true', the user is currently logged in on the device. This value is available in iOS 9.3 and later, and macOS 10.13 and later. */
            IsLoggedIn: boolean;
            /** If 'true', the user has data to sync to the cloud. This value is available in iOS 9.3 and later.
             *
             * - macOS:
             *    - introduced: n/a
             */
            HasDataToSync: boolean | undefined;
            /** If present, the user's data quota in bytes. This isn't present if the account doesn't enforce a quota. This value is available in iOS 9.3 and later.
             *
             * - macOS:
             *    - introduced: n/a
             */
            DataQuota: number | undefined;
            /** The amount of data, in bytes, that the user has used. This value is available in iOS 9.3 and later.
             *
             * - macOS:
             *    - introduced: n/a
             */
            DataUsed: number | undefined;
            /** If 'true', the account is a mobile account. This value is available in macOS 10.13 and later.
             *
             * - iOS:
             *    - introduced: n/a
             */
            MobileAccount: boolean | undefined;
            /** If 'true', the user currently has a secure token set. This value is available in macOS 11 and later.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - macOS:
             *    - introduced: 11.0
             */
            HasSecureToken: boolean | undefined;
        }
    >;
};
