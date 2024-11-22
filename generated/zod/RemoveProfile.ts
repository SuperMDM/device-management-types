import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command allows the server to remove a profile. This command requires the Profile Installation and Removal Right. It's supported in the user channel.
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
export const RemoveProfilePayload = z.object({
    /** The identifier of the profile to remove. */
    Identifier: z.string(),
});
