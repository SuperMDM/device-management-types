import { z } from 'https://deno.land/x/zod/mod.ts';

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
export const ProvisioningProfileList = z.object({
    /** An array of dictionaries that describes each installed profile. */
    ProvisioningProfileList: z.array(
        z.object({
            /** The display name of the provisioning profile. */
            Name: z.string(),
            /** The unique identifier for the provisioning profile. */
            UUID: z.string(),
            /** The expiry date of the provisioning profile. */
            ExpiryDate: z.date().optional(),
        }),
    ),
});
