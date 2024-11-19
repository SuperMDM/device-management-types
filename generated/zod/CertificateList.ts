import { z } from 'https://deno.land/x/zod/mod.ts';

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
export const CertificateListPayload = z.object({
    /** If 'true', only include certificates that MDM installed or that are in the same profile as the MDM payload. User-enrolled devices ignore this value and always only include managed certificates. This value is available in iOS 13 and later, macOS 10.15 and later, and tvOS 13 and later.
     *
     * - iOS:
     *    - introduced: 13.0
     *
     * - macOS:
     *    - introduced: 10.15
     *
     * - tvOS:
     *    - introduced: 13.0
     */
    ManagedOnly: z.boolean().optional(),
});

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
export const CertificateListResponse = z.object({
    /** An array of certificate list items that describes each certificate. */
    CertificateList: z.array(
        z.object({
            /** The certificate's common name. */
            CommonName: z.string(),
            /** If 'true', this is an identity certificate. */
            IsIdentity: z.boolean(),
            /** The certificate in DER-encoded X.509 format. */
            Data: z.string(),
        }),
    ),
});
