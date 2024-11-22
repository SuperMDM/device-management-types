import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command allows the server to install a provisioning profile. No error occurs if the provisioning profile is already installed. This command requires the Provisioning Profile Installation and Removal right. On macOS, this command is for iOS and iPadOS style provisioning profiles only.
 *
 * - iOS:
 *    - introduced: 4.0
 *    - accessrights: AllowProvisioningInstallationRemoval
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
 *    - accessrights: AllowProvisioningInstallationRemoval
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: AllowProvisioningInstallationRemoval
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - accessrights: AllowProvisioningInstallationRemoval
 *    - supervised: false
 */
export const InstallProvisioningProfilePayload = z.object({
    /** The provisioning profile. */
    ProvisioningProfile: z.string(),
});
