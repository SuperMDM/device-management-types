import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command allows the host to install a configuration profile. The profile may be encrypted using any installed identity certificate. The profile may also be signed. This command requires the Profile Installation and Removal right. It's supported in the user channel.
 *
 * - iOS:
 *    - introduced: 4.0
 *    - accessrights: AllowInstallationRemoval
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:true}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 10.7
 *    - accessrights: AllowInstallationRemoval
 *    - devicechannel: true
 *    - userchannel: true
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - tvOS:
 *    - introduced: 9.0
 *    - accessrights: AllowInstallationRemoval
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: AllowInstallationRemoval
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - accessrights: AllowInstallationRemoval
 *    - supervised: false
 */
export const InstallProfilePayload = z.object({
    /** The profile to install, which you can encrypt using any identity certificate installed on the device. You can also sign the profile. */
    Payload: z.string(),
});
