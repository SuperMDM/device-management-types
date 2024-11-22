import { z } from 'https://deno.land/x/zod/mod.ts';

/** This command allows the server to remotely erase the device. This command requires the Device Erase right.
 *
 * - iOS:
 *    - introduced: 4.0
 *    - accessrights: AllowDeviceErase
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:forbidden}
 *
 * - macOS:
 *    - introduced: 10.7
 *    - accessrights: AllowDeviceErase
 *    - devicechannel: true
 *    - userchannel: false
 *    - requiresdep: false
 *    - userenrollment: {mode:forbidden}
 *
 * - tvOS:
 *    - introduced: 10.2
 *    - accessrights: AllowDeviceErase
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: AllowDeviceErase
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:forbidden}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - accessrights: AllowDeviceErase
 *    - supervised: false
 */
export const EraseDevicePayload = z.object({
    /** If 'true', preserve the data plan on an iPhone or iPad with eSIM functionality, if one exists. This value is available in iOS 11 and later.
     *
     * - iOS:
     *    - introduced: 11.0
     *
     * - macOS:
     *    - introduced: n/a
     *
     * - tvOS:
     *    - introduced: n/a
     *
     * - visionOS:
     *    - introduced: n/a
     */
    PreserveDataPlan: z.boolean().optional(),
    /** If 'true', disable Proximity Setup on the next reboot and skip the pane in Setup Assistant. This value is available in iOS 11 and later. Prior to iOS 14, don't use this option with any other option.
     *
     * - iOS:
     *    - introduced: 11.3
     *    - sharedipad: {mode:forbidden}
     *
     * - macOS:
     *    - introduced: n/a
     *
     * - tvOS:
     *    - introduced: n/a
     *
     * - visionOS:
     *    - introduced: n/a
     *
     * - watchOS:
     *    - introduced: n/a
     */
    DisallowProximitySetup: z.boolean().optional(),
    /** The six-character PIN for Find My. This value is available in macOS 10.8 and later.
     *
     * - iOS:
     *    - introduced: n/a
     *
     * - macOS:
     *    - introduced: 10.8
     *
     * - tvOS:
     *    - introduced: n/a
     *
     * - visionOS:
     *    - introduced: n/a
     *
     * - watchOS:
     *    - introduced: n/a
     */
    PIN: z.string().optional(),
    /** This key defines the fallback behavior for erasing a device.
     * In macOS 12 and later, this command uses Erase All Content and Settings (EACS) on Mac computers with the Apple M1 chip or the Apple T2 Security Chip. On those devices, if EACS can't run, the device can use obliteration (macOS 11.x behavior). This key has no effect on machines prior to the T2 chip. For a list of supported macs, see Mac models with the Apple T2 Security Chip <https://support.apple.com/en-us/HT208862>.
     * Upon receiving this command, the device performs preflight checks to determine if the device is in a state that allows EACS. The 'status' of the EraseDeviceResponse is either 'Acknowledged' or 'Error'.
     * The following values define the device's fallback behavior:
     *
     ** 'DoNotObliterate': If EACS preflight fails, the device responds to the server with an 'Error' status and doesn't attempt to erase itself.
     * If EACS preflight succeeds but EACS fails, then the device doesn't attempt to erase itself.
     ** 'ObliterateWithWarning': If EACS preflight fails, the device responds with an 'Acknowledged' status and then attempts to erase itself.
     * If EACS preflight succeeds but EACS fails, then the device attempts to erase itself.
     ** 'Always': The system doesn't attempt EACS. T2 and later devices always obliterate.
     ** 'Default': If EACS preflight fails, the device responds to the server with an 'Error' status and then attempts to erase itself.
     * If EACS preflight succeeds but EACS fails, then the device attempts to erase itself.
     *
     * - iOS:
     *    - introduced: n/a
     *
     * - macOS:
     *    - introduced: 12.0
     *
     * - tvOS:
     *    - introduced: n/a
     *
     * - visionOS:
     *    - introduced: n/a
     *
     * - watchOS:
     *    - introduced: n/a
     */
    ObliterationBehavior: z.string().optional(),
    /** The configuration settings for Return to Service. This value is available in iOS 17 and later and with Shared iPad and tvOS 18 and later.
     *
     * - iOS:
     *    - introduced: 17.0
     *
     * - macOS:
     *    - introduced: n/a
     *
     * - tvOS:
     *    - introduced: 18.0
     *
     * - visionOS:
     *    - introduced: n/a
     *
     * - watchOS:
     *    - introduced: n/a
     */
    ReturnToService: z.object({
        /** If 'true', the device tries to re-enroll itself automatically after erasure. The user needs to deactivate all activation locks for this feature to work correctly. */
        Enabled: z.boolean(),
        /** The WiFi profile that installed after erasure, when using Return to Service. This is required when the device doesn't have ethernet access. */
        WiFiProfileData: z.string().optional(),
        /** The MDM profile installed after erasure, when using Return to Service. This key is required for all unsupervised devices, as well as supervised devices that weren't enrolled with ADE. If provided, the device uses this profile directly instead of fetching it from the server. For ADE enrolled devices, this key isn't necessary unless the cloud configuration profile of the device contains the 'configuration-web-url' key.
         * The cloud configuration is still downloaded from Apple's servers when the profile contains this key, so the supervision identity, MDM removability and other settings from the cloud configuration still applies. However, the device doesn't use the URL specified in the cloud configuration to fetch the MDM profile. */
        MDMProfileData: z.string().optional(),
    }).optional(),
});
