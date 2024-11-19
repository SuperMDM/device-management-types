/** This command allows the server to retrieve the list of installed provisioning profiles on the device. This command requires the Inspect Provisioning Profiles right. On macOS, this command is for iOS and iPadOS style provisioning profiles only.
 *
 * - iOS:
 *    - introduced: 4.0
 *    - accessrights: AllowProvisioningInspection
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 11.0
 *    - accessrights: None
 *    - devicechannel: true
 *    - userchannel: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - tvOS:
 *    - introduced: 10.2
 *    - accessrights: AllowProvisioningInspection
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: AllowProvisioningInspection
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - accessrights: AllowProvisioningInspection
 *    - supervised: false
 */
export type ProvisioningProfileListPayload = {
    /** If 'true', only include profiles that MDM has installed. For user enrollments, the device ignores this key and always limits the results to managed profiles. This value is available in iOS 13 and later, and tvOS 13 and later.
     *
     * - iOS:
     *    - introduced: 13.0
     *
     * - tvOS:
     *    - introduced: 13.0
     */
    ManagedOnly: boolean | undefined;
};

/** This command allows the server to retrieve the list of installed provisioning profiles on the device. This command requires the Inspect Provisioning Profiles right. On macOS, this command is for iOS and iPadOS style provisioning profiles only.
 *
 * - iOS:
 *    - introduced: 4.0
 *    - accessrights: AllowProvisioningInspection
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 11.0
 *    - accessrights: None
 *    - devicechannel: true
 *    - userchannel: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - tvOS:
 *    - introduced: 10.2
 *    - accessrights: AllowProvisioningInspection
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: AllowProvisioningInspection
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - accessrights: AllowProvisioningInspection
 *    - supervised: false
 */
export type ProvisioningProfileListResponse = {
    /** An array of dictionaries that describes each installed profile. */
    ProvisioningProfileList: Array<
        {
            /** The display name of the provisioning profile. */
            Name: string;
            /** The unique identifier for the provisioning profile. */
            UUID: string;
            /** The expiry date of the provisioning profile. */
            ExpiryDate: Date | undefined;
        }
    >;
};
