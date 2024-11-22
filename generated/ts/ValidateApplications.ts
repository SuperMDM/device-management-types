/** This command allows the server to query for installed 3rd party applications.
 *
 * - iOS:
 *    - introduced: 9.2
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: n/a
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
export type ValidateApplicationsPayload = {
    /** The bundle identifiers of the enterprise apps to include for validation of associated provisioning profiles, if you choose to provide them. Otherwise, validation occurs for the provisioning profiles for the installed managed apps. */
    Identifiers: Array<string> | undefined;
};
