import { z } from 'https://deno.land/x/zod/mod.ts';

/** Allows changing the password of a local admin account that was created by Setup Assistant during DEP enrollment via the AccountConfiguration command.
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 10.11
 *    - accessrights: None
 *    - devicechannel: true
 *    - userchannel: false
 *    - requiresdep: true
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
export const SetAutoAdminPasswordPayload = z.object({
    /** The unique identifier of the local administrator account. If this value doesn't match the GUID of an administrator account that MDM created during Device Enrollment Program (DEP) enrollment, the command returns an error. */
    GUID: z.string(),
    /** The precreated salted SHA-512 PBKDF2 password hash for the account.
     * Create this hash on the server using the CommonCrypto libraries, or equivalent, as a salted SHA-512 PBKDF2 dictionary that contains these elements:
     ** 'entropy': The derived key from the password hash; for example, from 'CCKeyDerivationPBKDF()'
     ** 'salt': The 32-byte randomized salt; for example, from 'CCRandomCopyBytes()'
     ** 'iterations:' The number of iterations; for example, from 'CCCalibratePBKDF()' using a minimum hash time of 100 milliseconds, or if unknown, a number in the range of 20,000 to 40,000 iterations
     * Place the dictionary that contains these elements into an outer dictionary with the key 'SALTED-SHA512-PBKDF2'. Convert this dictionary to binary data before setting it as the value for 'passwordHash'. */
    passwordHash: z.string(),
});
