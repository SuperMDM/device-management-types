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
export type InstallApplicationPayload = {
    /** The app's iTunes Store identifier. */
    iTunesStoreID: number | undefined;
    /** The app's bundle identifier.
     * For a watchOS app, the identifier needs to be the watch's bundle identifier, which differs from the main bundle identifier for the iPhone to which the watch is paired. Obtain the watch's bundle identifier for an app with a watch bundle, in the 'watchBundleId' key that's part of the Content Metadata query. For more information on this query, see Getting App and Book Information (Legacy).
     *
     * - iOS:
     *    - introduced: 7.0
     */
    Identifier: string | undefined;
    /** A dictionary that contains the app installation options.
     *
     * - iOS:
     *    - introduced: 7.0
     */
    Options: {
        /** The app's purchase type, which must be one of the following values:
         ** '0': Free apps and Legacy Volume Purchase Program (VPP) with a redemption code. This option is only available in iOS.
         ** '1': Volume Purchase Program (VPP) app assignment.
         * Set this value to '1' to install first-party apps without user login to the iTunes Store, such as Mail or Safari, or to install an iOS app with user enrollment. */
        PurchaseMethod: number | undefined;
    } | undefined;
    /** The URL of the app manifest, which needs to begin with 'https:'. The manifest is returned as a property list.
     *
     * - iOS:
     *    - introduced: 7.0
     */
    ManifestURL: string | undefined;
    /** A bitwise OR of the management flags. The possible values are:
     *
     ** '1': If 'InstallAsManaged' is 'true', remove the app upon removal of the MDM profile.
     ** '4': Prevent backup of app data.
     ** '5': Both '1' and '4'.
     *
     * Available in iOS 5 and later, macOS 11 and later, and tvOS 10.2 and later.
     *
     * - macOS:
     *    - introduced: 11.0
     *    - userenrollment: {mode:forbidden}
     */
    ManagementFlags: number | undefined;
    /** A dictionary that contains the initial configuration of the app, if you choose to provide it. Available in iOS 7 and later, macOS 11 and later, and tvOS 10.2 and later.
     *
     * - iOS:
     *    - introduced: 7.0
     *
     * - macOS:
     *    - introduced: 11.0
     */
    Configuration: {
        /** An app configuration key. */
        ANY: any | undefined;
    } | undefined;
    /** A dictionary that contains the initial attributes of the app, if you choose to provide it. Available in iOS 7 and later, and tvOS 10.2 and later.
     *
     * - iOS:
     *    - introduced: 7.0
     *
     * - macOS:
     *    - introduced: n/a
     */
    Attributes: {
        /** A per-app VPN unique identifier for this app. Available in iOS 7 and later.
         *
         * - tvOS:
         *    - introduced: n/a
         */
        VPNUUID: string | undefined;
        /** The content filter UUID for this app. Available in iOS 16 and later.
         *
         * - iOS:
         *    - introduced: 16.0
         *
         * - tvOS:
         *    - introduced: n/a
         *
         * - watchOS:
         *    - introduced: n/a
         */
        ContentFilterUUID: string | undefined;
        /** The DNS proxy UUID for this app. Available in iOS 16 and later.
         *
         * - iOS:
         *    - introduced: 16.0
         *
         * - tvOS:
         *    - introduced: n/a
         *
         * - watchOS:
         *    - introduced: n/a
         */
        DNSProxyUUID: string | undefined;
        /** The relay UUID for this app. Available in iOS 17 and later.
         *
         * - iOS:
         *    - introduced: 17.0
         *
         * - tvOS:
         *    - introduced: n/a
         *
         * - watchOS:
         *    - introduced: n/a
         */
        RelayUUID: string | undefined;
        /** An array that contains the associated domains to add to this app. Available in iOS 13 and later.
         *
         * - iOS:
         *    - introduced: 13.0
         *
         * - tvOS:
         *    - introduced: n/a
         */
        AssociatedDomains: Array<string> | undefined;
        /** If 'true', perform claimed site association verification directly at the domain instead of on Apple's servers. Only set this to 'true' for domains that can't access the internet. Available in iOS 14 and later.
         *
         * - iOS:
         *    - introduced: 14.0
         *
         * - tvOS:
         *    - introduced: n/a
         */
        AssociatedDomainsEnableDirectDownloads: boolean | undefined;
        /** If 'false', this app isn't removable while it's a managed app. Available in iOS 14 and later, and tvOS 14 and later.
         *
         * - iOS:
         *    - introduced: 14.0
         *
         * - tvOS:
         *    - introduced: 14.0
         */
        Removable: boolean | undefined;
        /** If 'true', Tap to Pay on iPhone requires users to use Face ID or a passcode to unlock their device after every transaction that requires a customer's card PIN. If 'false', the user can configure this setting on their device.
         * Available in iOS 16.4 and later.
         *
         * - iOS:
         *    - introduced: 16.4
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
        TapToPayScreenLock: boolean | undefined;
        /** The data network name (DNN) or app category. For DNN, the value is 'DNN:name', where 'name' is the carrier-provided DNN name. For app category, the value is 'AppCategory:category', where 'category' is a carrier-provided string like “Enterprise1”.
         * Available in iOS 17 and later.
         *
         * - iOS:
         *    - introduced: 17.0
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
        CellularSliceUUID: string | undefined;
        /** Setting this to false prevents the user from hiding the app. It does not affect the user's ability to leave it in the App Library, while removing it from the home screen.
         *
         * - iOS:
         *    - introduced: 18.1
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
        Hideable: boolean | undefined;
        /** Setting this to false prevents the user from locking the app. Because hiding an app also requires locking it, disallowing the user from locking the app will also prevent the user from hiding it.
         *
         * - iOS:
         *    - introduced: 18.1
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
        Lockable: boolean | undefined;
    } | undefined;
    /** The change management state. The only possible value is:
     *
     ** 'Managed': Take management of the app if the user installed it already. This also requires that you pass 'true' for 'InstallAsManaged'.
     *
     * This value doesn't work with the User Enrollment feature introduced in iOS 13. Available in iOS 9 and later, macOS 11 and later, and tvOS 10.2 and later.
     *
     * - iOS:
     *    - introduced: 9.0
     *    - userenrollment: {mode:forbidden}
     *
     * - macOS:
     *    - introduced: 11.0
     *    - userenrollment: {mode:forbidden}
     *
     * - visionOS:
     *    - userenrollment: {mode:forbidden}
     */
    ChangeManagementState: string | undefined;
    /** If 'true', install the app as a managed app. Otherwise, the system installs the app as unmanaged. If you reinstall a manged app and omit this value or set it to 'false', the app becomes unmanaged.
     * For manifest-based installs, if 'true', the system only considers apps installed in '/Applications' as managed. In macOS 11 through 13, the system requires that the 'pkg' only contains a single signed app.
     * Available in macOS 11 and later.
     *
     * - iOS:
     *    - introduced: n/a
     *
     * - macOS:
     *    - introduced: 11.0
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
    InstallAsManaged: boolean | undefined;
    /** If 'true', the app is an iOS app that can run on an Apple silicon in macOS 11 and later.
     *
     * - iOS:
     *    - introduced: n/a
     *
     * - macOS:
     *    - introduced: 11.0
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
    iOSApp: boolean | undefined;
};

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
export type InstallApplicationResponse = {
    /** The app's bundle identifier, if the user accepted the request.
     * For a watchOS app, the identifier is the watch's bundle identifier, which differs from the main bundle identifier for the iPhone to which the watch is paired. */
    Identifier: string | undefined;
    /** The app's installation state, if the user accepted the request. If this value is 'NeedsRedemption', the server must send a redemption code to complete the app installation. */
    State: string | undefined;
    /** The reason, if installation fails. macOS only returns "Other". */
    RejectionReason: string | undefined;
};
