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
export type ProfileList = {
    /** An array of dictionaries that describes each installed profile. */
    ProfileList: Array<
        {
            /** The unique identifier for the profile. */
            PayloadUUID: string;
            /** The reverse-DNS-style identifier of the profile; for example, 'com.example.myprofile'. */
            PayloadIdentifier: string;
            /** The version of the configuration profile as a whole, not of the individual profiles within it. The value should be '1'. */
            PayloadVersion: number | undefined;
            /** The human-readable name of the profile. */
            PayloadDisplayName: string | undefined;
            /** The human-readable name of the organization that provided the profile. */
            PayloadOrganization: string | undefined;
            /** The description of the profile. */
            PayloadDescription: string | undefined;
            /** If 'true', the user can't delete the profile unless it has a removal password and the user provides it. The framework ignores this field on unsupervised devices. */
            PayloadRemovalDisallowed: boolean | undefined;
            /** If 'true', the profile has a passcode for removal. */
            HasRemovalPasscode: boolean | undefined;
            /** If 'true', it's an encrypted profile. */
            IsEncrypted: boolean | undefined;
            /** An array that contains the certificate for signing the profile, followed by any intermediate certificates, in DER-encoded X.509 format. */
            SignerCertificates: Array<string> | undefined;
            /** If 'true', the current MDM service installed the profile. MDM doesn't return this value for supervised devices, and can remove or replace all profiles on supervised devices.
             *
             * - macOS:
             *    - introduced: n/a
             */
            IsManaged: boolean | undefined;
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
            Source: string | undefined;
            /** An array of payload content items. This value isn't present if 'IsEncrypted' is 'true'. */
            PayloadContent:
                | Array<
                    {
                        /** The type of payload, such as 'com.apple.wifi.managed'. */
                        PayloadType: string;
                        /** The version of the payload. The value should be '1'. */
                        PayloadVersion: number;
                        /** The reverse-DNS-style identifier of the payload, such as 'com.example.mypayload'. */
                        PayloadIdentifier: string;
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
                        PayloadUUID: string | undefined;
                        /** The human-readable name of the payload. */
                        PayloadDisplayName: string | undefined;
                        /** A description of the payload. */
                        PayloadDescription: string | undefined;
                        /** The human-readable name of the organization that provided the payload. */
                        PayloadOrganization: string | undefined;
                    }
                >
                | undefined;
        }
    >;
};
