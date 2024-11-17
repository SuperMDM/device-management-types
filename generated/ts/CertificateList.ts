/** This command allows the server to retrieve the list of installed certificates on the device. The command requires that the server has the Inspect Profile Manifest privilege.
 * For userenrollment, this request will limit to certificates pushed via MDM.
 *
 * - iOS:
 *    - introduced: 4.0
 *    - accessrights: AllowInspection
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 10.7
 *    - accessrights: AllowInspection
 *    - devicechannel: true
 *    - userchannel: true
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - tvOS:
 *    - introduced: 9.0
 *    - accessrights: AllowInspection
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: AllowInspection
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - accessrights: AllowInspection
 *    - supervised: false
 */
export type CertificateList = {
    /** An array of certificate list items that describes each certificate. */
    CertificateList: Array<
        {
            /** The certificate's common name. */
            CommonName: string;
            /** If 'true', this is an identity certificate. */
            IsIdentity: boolean;
            /** The certificate in DER-encoded X.509 format. */
            Data: string;
        }
    >;
};
