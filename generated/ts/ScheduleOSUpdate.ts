/** This command allows the server to schedule an OS update.
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
 *    - introduced: 10.11
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
export type ScheduleOSUpdate = {
    /** An array of dictionaries that describes the results of processing operating-system updates. */
    UpdateResults: Array<
        {
            /** The product key that represents the update. */
            ProductKey: string;
            /** The install action that the device scheduled, which is one of the following values:
             ** 'Error': An error occurred during scheduling.
             ** 'DownloadOnly': Download the software update without installing it.
             ** 'InstallASAP': Install a previously downloaded software update.
             ** 'NotifyOnly': Download the software update and notify the user through the App Store. This value is available in macOS 10.11 and later.
             ** 'InstallLater': Download the software update and install it at a later time. This value is available in macOS 10.11 and later.
             ** 'InstallForceRestart': Perform the 'Default' action, and then force a restart if the update requires it. This value is available in macOS 11 and later. */
            InstallAction: string;
            /** The status of the update, which is one of the following values:
             ** 'Idle': The update is idle.
             ** 'Downloading': The software update is downloading.
             ** 'DownloadFailed': The download failed.
             ** 'DownloadRequiresComputer': Tether the device to download this update. This value is only available in iOS.
             ** 'DownloadInsufficientSpace': There isn't enough space to download the update.
             ** 'DownloadInsufficientPower': There isn't enough power to download the update.
             ** 'DownloadInsufficientNetwork': The network capacity is insufficient to download the update.
             ** 'Installing': The software update is installing.
             ** 'InstallInsufficientSpace': There isn't enough space to install the update.
             ** 'InstallInsufficientPower': There isn't enough power to install the update.
             ** 'InstallPhoneCallInProgress': Installation couldn't occur because a phone call is in progress.
             ** 'InstallFailed': Installation failed due to an unspecified reason. */
            Status: string;
            /** A dictionary that describes an error chain. */
            ErrorChain:
                | Array<
                    {
                        /** The error details. */
                        ANY: any;
                    }
                >
                | undefined;
        }
    >;
};
