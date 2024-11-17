import { z } from 'https://deno.land/x/zod/mod.ts';

/** Requests that the device perform a background scan for OS updates.
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 10.11
 *    - accessrights: None
 *    - devicechannel: true
 *    - userchannel: false
 *    - supervised: true
 *    - requiresdep: false
 *    - userenrollment: {mode:forbidden}
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
export const ScheduleOSUpdateScan = z.object({
    /** If 'true', the scan started successfully. */
    ScanInitiated: z.boolean(),
});
