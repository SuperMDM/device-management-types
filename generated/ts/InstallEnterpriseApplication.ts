/** This command allows the server to install an application on a device. It provides a more secure version of 'InstallApplication' that specifies a 'ManifestURL'.
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 10.13.6
 *    - accessrights: AllowAppInstallation
 *    - devicechannel: true
 *    - userchannel: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
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
export type InstallEnterpriseApplicationPayload = {
    /** A dictionary that specifies where to download the app. This value is backward-compatible with the manifest for the InstallApplicationCommand; however, it also allows you to specify 'sha256s' and 'sha256-size' for SHA-256 hashes. */
    Manifest: {
        /** A manifest, which is backward-compatible with the manifest for the 'InstallApplication' command; however, it also allows you to specify 'sha256s' and 'sha256-size' for SHA-256 hashes. */
        ANY: any | undefined;
    } | undefined;
    /** The URL of the app manifest, which needs to begin with 'https:'. The manifest is returned as a property list. */
    ManifestURL: string | undefined;
    /** An array of DER-encoded certificates to pin the connection when fetching the 'ManifestURL'. */
    ManifestURLPinningCerts: Array<string> | undefined;
    /** If 'true', certificate revocation checks require a positive response when using certificate pinning with 'ManifestURLPinningCerts'. */
    PinningRevocationCheckRequired: boolean | undefined;
    /** If 'true', install the app as a managed app. Otherwise, the system installs the app as unmanaged. If you reinstall a manged app and omit this value or set it to 'false', the app becomes unmanaged.
     * For manifest-based installs, if 'true', the system only considers apps installed in '/Applications' as managed. In macOS 11 through 13, the system requires that the 'pkg' only contains a single signed app.
     * Available in macOS 11 and later.
     *
     * - macOS:
     *    - introduced: 11.0
     *    - userenrollment: {mode:forbidden}
     */
    InstallAsManaged: boolean | undefined;
    /** The management flags. The possible values are:
     *
     ** '1': If 'InstallAsManaged' is 'true', remove the app upon removal of the MDM profile.
     *
     * Available in macOS 11 and later.
     *
     * - macOS:
     *    - introduced: 11.0
     *    - userenrollment: {mode:forbidden}
     */
    ManagementFlags: number | undefined;
    /** A dictionary that contains the initial configuration of the app, if you choose to provide it. Available in macOS 11 and later.
     *
     * - macOS:
     *    - introduced: 11.0
     */
    Configuration: {
        /** An app configuration. */
        ANY: any | undefined;
    } | undefined;
    /** The change management state. This value doesn't work with the User Enrollment feature introduced in iOS 13. The only possible value is:
     *
     ** 'Managed': Take management of the app if the user installed it already and 'InstallAsManaged' is 'true'.
     *
     * Available in macOS 11 and later.
     *
     * - macOS:
     *    - introduced: 11.0
     *    - userenrollment: {mode:forbidden}
     */
    ChangeManagementState: string | undefined;
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
     */
    iOSApp: boolean | undefined;
};
