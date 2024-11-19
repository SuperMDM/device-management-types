import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command allows the MDM server to query for the profiles installed on the device. This command requires the Inspect Profile Manifest right. It's supported on the user channel.
 *
 * - iOS:
 *    - introduced: 4.0
 *    - accessrights: AllowInspection
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:true}
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
export const ProfileListPayload = z.object({
    /** If 'true', only include profiles that MDM has installed. For user enrollments, the device ignores this key and always limits the results to managed profiles. This value is available in iOS 13 and later, macOS 10.5 and later, and tvOS 13 and later.
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

/** This command allows the MDM server to query for the profiles installed on the device. This command requires the Inspect Profile Manifest right. It's supported on the user channel.
 *
 * - iOS:
 *    - introduced: 4.0
 *    - accessrights: AllowInspection
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:true}
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
export const ProfileListResponse = z.object({
    /** An array of dictionaries that describes each installed profile. */
    ProfileList: z.array(
        z.object({
            /** The unique identifier for the profile. */
            PayloadUUID: z.string(),
            /** The reverse-DNS-style identifier of the profile; for example, 'com.example.myprofile'. */
            PayloadIdentifier: z.string(),
            /** The version of the configuration profile as a whole, not of the individual profiles within it. The value should be '1'. */
            PayloadVersion: z.number().optional(),
            /** The human-readable name of the profile. */
            PayloadDisplayName: z.string().optional(),
            /** The human-readable name of the organization that provided the profile. */
            PayloadOrganization: z.string().optional(),
            /** The description of the profile. */
            PayloadDescription: z.string().optional(),
            /** If 'true', the user can't delete the profile unless it has a removal password and the user provides it. The framework ignores this field on unsupervised devices. */
            PayloadRemovalDisallowed: z.boolean().optional(),
            /** If 'true', the profile has a passcode for removal. */
            HasRemovalPasscode: z.boolean().optional(),
            /** If 'true', it's an encrypted profile. */
            IsEncrypted: z.boolean().optional(),
            /** An array that contains the certificate for signing the profile, followed by any intermediate certificates, in DER-encoded X.509 format. */
            SignerCertificates: z.array(z.string()).optional(),
            /** If 'true', the current MDM service installed the profile. MDM doesn't return this value for supervised devices, and can remove or replace all profiles on supervised devices.
             *
             * - macOS:
             *    - introduced: n/a
             */
            IsManaged: z.boolean().optional(),
            /** Source of the profile. This value will be set to "Declarative Device Management" when the profile is managed by Declarative Device Management.
             *
             * - iOS:
             *    - introduced: 18.0
             *
             * - macOS:
             *    - introduced: 15.0
             *
             * - tvOS:
             *    - introduced: 18.0
             *
             * - visionOS:
             *    - introduced: 2.0
             *
             * - watchOS:
             *    - introduced: 11.0
             */
            Source: z.string().optional(),
            /** An array of payload content items. This value isn't present if 'IsEncrypted' is 'true'. */
            PayloadContent: z.array(
                z.object({
                    /** The type of payload, such as 'com.apple.wifi.managed'. */
                    PayloadType: z.string(),
                    /** The version of the payload. The value should be '1'. */
                    PayloadVersion: z.number(),
                    /** The reverse-DNS-style identifier of the payload, such as 'com.example.mypayload'. */
                    PayloadIdentifier: z.string(),
                    /** The unique identifier of the payload.
                     *
                     * - iOS:
                     *    - introduced: 17.0
                     *
                     * - macOS:
                     *    - introduced: 14.0
                     *
                     * - tvOS:
                     *    - introduced: 17.0
                     */
                    PayloadUUID: z.string().optional(),
                    /** The human-readable name of the payload. */
                    PayloadDisplayName: z.string().optional(),
                    /** A description of the payload. */
                    PayloadDescription: z.string().optional(),
                    /** The human-readable name of the organization that provided the payload. */
                    PayloadOrganization: z.string().optional(),
                }),
            ).optional(),
        }),
    ),
});
