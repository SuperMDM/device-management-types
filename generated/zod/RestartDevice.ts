import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command requires the Device Lock access right. The device will restart immediately.
 *
 * - iOS:
 *    - introduced: 10.3
 *    - accessrights: AllowPasscodeRemovalAndLock
 *    - supervised: true
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:forbidden}
 *
 * - macOS:
 *    - introduced: 10.13
 *    - accessrights: AllowPasscodeRemovalAndLock
 *    - devicechannel: true
 *    - userchannel: false
 *    - requiresdep: false
 *    - userenrollment: {mode:forbidden}
 *
 * - tvOS:
 *    - introduced: 10.2
 *    - accessrights: AllowPasscodeRemovalAndLock
 *    - supervised: true
 *
 * - visionOS:
 *    - introduced: n/a
 *
 * - watchOS:
 *    - introduced: n/a
 */
export const RestartDevicePayload = z.object({
    /** If 'true', the system rebuilds the kernel cache during a device restart. If 'BootstrapTokenAllowedForAuthentication' is 'true' in the SecurityInfoResponse.SecurityInfo response, the device requests the bootstrap token from the MDM server prior to executing this command. This value is available in macOS 11 and later.
     *
     * - iOS:
     *    - introduced: n/a
     *
     * - macOS:
     *    - introduced: 11.0
     *
     * - tvOS:
     *    - introduced: n/a
     */
    RebuildKernelCache: z.boolean().optional(),
    /** If 'RebuildKernelCache' is 'true', this value specifies the paths to kexts to add to the auxiliary kernel cache since the last kernel cache rebuild. If not present, the system only adds previously discovered kexts to the kernel cache. This value is available in macOS 11 and later.
     *
     * - iOS:
     *    - introduced: n/a
     *
     * - macOS:
     *    - introduced: 11.0
     *
     * - tvOS:
     *    - introduced: n/a
     */
    KextPaths: z.array(z.string()).optional(),
    /** If 'true', notifies the user to restart the device at their convenience. No forced restart occurs unless the device is at 'loginwindow' with no logged-in users. The user can dismiss the notification and ignore the request. No further notifications display unless you resend the command.
     * This value is available in macOS 11.3 and later.
     *
     * - iOS:
     *    - introduced: n/a
     *
     * - macOS:
     *    - introduced: 11.4
     *
     * - tvOS:
     *    - introduced: n/a
     */
    NotifyUser: z.boolean().optional(),
});
