import { z } from 'https://deno.land/x/zod/mod.ts';

/** If a redemption code is needed during app installation, the server can use this command to complete the app installation.
 *
 * - iOS:
 *    - introduced: 5.0
 *    - accessrights: AllowAppInstallation
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:forbidden}
 *    - userenrollment: {mode:forbidden}
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
export const ApplyRedemptionCodePayload = z.object({
    /** The bundle identifier of the app. */
    Identifier: z.string(),
    /** The redemption code that applies to the app pending installation. */
    RedemptionCode: z.string(),
});
