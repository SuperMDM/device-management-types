/** Queries the device for the status of software updates.
 *
 * - iOS:
 *    - introduced: 9.0
 *    - accessrights: AllowAppInstallation
 *    - supervised: true
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:forbidden}
 *
 * - macOS:
 *    - introduced: 10.11.5
 *    - accessrights: None
 *    - devicechannel: true
 *    - userchannel: false
 *    - supervised: true
 *    - requiresdep: false
 *    - userenrollment: {mode:forbidden}
 *
 * - tvOS:
 *    - introduced: 12.0
 *    - accessrights: AllowAppInstallation
 *    - devicechannel: true
 *    - supervised: true
 *    - requiresdep: false
 *
 * - visionOS:
 *    - introduced: n/a
 *
 * - watchOS:
 *    - introduced: n/a
 */
export type OSUpdateStatus = {
    /** An array of dictionaries that describes the statuses of software updates. This command only returns the status for System Applications and Configuration Data updates if a Software Update is actively managed via a Declarative Device Management 'Software Update Enforcement Policy' configuration. */
    OSUpdateStatus: Array<
        {
            /** The product key that represents the update. */
            ProductKey: string;
            /** If 'true', the update has finished downloading. */
            IsDownloaded: boolean;
            /** A floating-point number between '0.0' and '1.0' that indicates the download progress as a percentage. */
            DownloadPercentComplete: number;
            /** The status of the update, which is one of the following values:
             ** 'Idle': The update is idle.
             ** 'Downloading': The software update is downloading and subsequently preparing.
             ** 'Installing': The software update is installing. */
            Status: string;
            /** The number of times a user can defer this OS update.
             * Available in macOS 12.3 and later.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - macOS:
             *    - introduced: 12.3
             *
             * - tvOS:
             *    - introduced: n/a
             */
            MaxDeferrals: number | undefined;
            /** The number of remaining user deferrals for this OS update.
             * Available in macOS 12.3 and later.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - macOS:
             *    - introduced: 12.3
             *
             * - tvOS:
             *    - introduced: n/a
             */
            DeferralsRemaining: number | undefined;
            /** The date of the next attempt at installing this OS update.
             * Available in macOS 12.3 and later.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - macOS:
             *    - introduced: 12.3
             *
             * - tvOS:
             *    - introduced: n/a
             */
            NextScheduledInstall: Date | undefined;
            /** The dates/times when the OS notified the user about installing this OS update.
             * Available in macOS 12.3 and later.
             *
             * - iOS:
             *    - introduced: n/a
             *
             * - macOS:
             *    - introduced: 12.3
             *
             * - tvOS:
             *    - introduced: n/a
             */
            PastNotifications: Array<Date> | undefined;
        }
    >;
};
