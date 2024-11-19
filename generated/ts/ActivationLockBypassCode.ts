/** Retrieves the Activation Lock bypass code from the device. This bypass code is only available for 15 days after supervision.
 *
 * - iOS:
 *    - introduced: 7.1
 *    - accessrights: None
 *    - supervised: true
 *    - requiresdep: false
 *    - sharedipad: {mode:forbidden}
 *    - userenrollment: {mode:forbidden}
 *
 * - macOS:
 *    - introduced: 10.15
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
 *    - introduced: 2.0
 *    - accessrights: None
 *    - supervised: true
 *    - requiresdep: false
 *    - userenrollment: {mode:forbidden}
 *
 * - watchOS:
 *    - introduced: n/a
 */
export type ActivationLockBypassCodeResponse = {
    /** The Activation Lock bypass code if it's available. */
    ActivationLockBypassCode: string;
};
