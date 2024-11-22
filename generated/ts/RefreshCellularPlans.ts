/** Instructs the device to query for active cellular plan eSIM "profiles" (not a profile in the MDM sense)
 * at the designated carrier eSIM server URL. This command is only supported on cellular devices, and only
 * a subset of those devices support eSIM configuration management. (Need details from CoreTelephony.)
 *
 * - iOS:
 *    - introduced: 13.0
 *    - accessrights: None
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
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
export type RefreshCellularPlansPayload = {
    /** The carrier's eSIM server URL to query. Obtain this URL from each carrier separately. */
    eSIMServerURL: string;
};
