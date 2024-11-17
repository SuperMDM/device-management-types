/** This command allows the server to query for installed 3rd party applications.
 *
 * - iOS:
 *    - introduced: 5.0
 *    - accessrights: AllowQueryApplications
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:false}
 *    - userenrollment: {mode:allowed}
 *
 * - macOS:
 *    - introduced: 10.7
 *    - accessrights: AllowQueryApplications
 *    - devicechannel: true
 *    - userchannel: true
 *    - requiresdep: false
 *    - userenrollment: {mode:forbidden}
 *
 * - tvOS:
 *    - introduced: 10.2
 *    - accessrights: AllowQueryApplications
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: AllowQueryApplications
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:allowed}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - accessrights: AllowQueryApplications
 *    - supervised: false
 */
export type InstalledApplicationList = {
    /** An array of dictionaries that describes each installed app. */
    InstalledApplicationList: Array<
        {
            /** The app's identifier. This key is always be present on iOS and tvOS, but may be missing on macOS.
             * For a watchOS app, the identifier is the watch's bundle identifier, which differs from the main bundle identifier for the iPhone to which the watch is paired. */
            Identifier: string | undefined;
            /** The app's external version identifier, which you can use in the iTunes Search API to determine if an updated version of the app is available. Compare this value to the 'externalId' value in the 'contentMetadataLookupUrl' response from the 'VPPServiceConfigSrv' endpoint. If these values don't match, an updated version of the app may be available.
             * A newer version of an app might not be available for installation on the device for a variety of reasons. A common reason is that the device's operating system version or hardware is incompatible with the available version of the app.
             *
             * - iOS:
             *    - introduced: 11.0
             *
             * - macOS:
             *    - introduced: 10.13
             *
             * - tvOS:
             *    - introduced: 11.0
             */
            ExternalVersionIdentifier: number | undefined;
            /** The marketplace hosted application's distributor ID. This value is available in iOS 17.4 and later.
             *
             * - iOS:
             *    - introduced: 17.4
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
            DistributorIdentifier: string | undefined;
            /** The app's version. */
            Version: string | undefined;
            /** The app's short version.
             *
             * - iOS:
             *    - introduced: 5.0
             */
            ShortVersion: string | undefined;
            /** The app's name. */
            Name: string | undefined;
            /** The app's static bundle size, in bytes. This value is available in iOS 5 and later, and macOS 10.7 and later, and tvOS 10.2 and later.
             *
             * - macOS:
             *    - introduced: 10.7
             */
            BundleSize: number | undefined;
            /** The size of the app's file system in bytes, including the Documents, Library, and other directories. This value is available in iOS 5 and later, and tvOS 10.2 and later.
             *
             * - iOS:
             *    - introduced: 5.0
             *
             * - macOS:
             *    - introduced: n/a
             */
            DynamicSize: number | undefined;
            /** If 'true', the app is valid and can run on the device. If the app is enterprise-distributed and unvalidated, it won't be able to run until validation has occurred. This value is available in iOS 9.2 and later, and tvOS 10.2 and later.
             *
             * - iOS:
             *    - introduced: 9.2
             *
             * - macOS:
             *    - introduced: n/a
             */
            IsValidated: boolean | undefined;
            /** If 'true', the app is downloading. If 'false', it's already installed. */
            Installing: boolean | undefined;
            /** If 'true', the app came from the App Store and can participate in store features. For device-based Volume Purchase Program (VPP) apps, this value is 'false'. This value is available in iOS 11.3 and later, and tvOS 11.3 and later.
             *
             * - iOS:
             *    - introduced: 11.3
             *
             * - macOS:
             *    - introduced: n/a
             *
             * - tvOS:
             *    - introduced: 11.3
             */
            AppStoreVendable: boolean | undefined;
            /** If 'true', installing the app didn't require an Apple Account. This value is available in iOS 11.3 and later, and tvOS 11.3 and later.
             *
             * - iOS:
             *    - introduced: 11.3
             *
             * - macOS:
             *    - introduced: n/a
             *
             * - tvOS:
             *    - introduced: 11.3
             */
            DeviceBasedVPP: boolean | undefined;
            /** If 'true', the app is part of the Apple Beta Software Program. This value is available in iOS 11.3 and later, and tvOS 11.3 and later.
             *
             * - iOS:
             *    - introduced: 11.3
             *
             * - macOS:
             *    - introduced: n/a
             *
             * - tvOS:
             *    - introduced: 11.3
             */
            BetaApp: boolean | undefined;
            /** If 'true', the app is ad-hoc code signed. This query is available in iOS 11.3 and later, and tvOS 11.3 and later.
             *
             * - iOS:
             *    - introduced: 11.3
             *
             * - macOS:
             *    - introduced: n/a
             *
             * - tvOS:
             *    - introduced: 11.3
             */
            AdHocCodeSigned: boolean | undefined;
            /** If 'true', the app has an update available. This key is present only for App Store apps. In macOS, this key is present only for Volume Purchase Program (VPP) apps. This status updates daily and isn't always up-to-date when installing an app.
             *
             * - iOS:
             *    - introduced: 11.3
             *
             * - macOS:
             *    - introduced: 10.13.4
             */
            HasUpdateAvailable: boolean | undefined;
            /** If 'true', the download failed. */
            DownloadFailed: boolean | undefined;
            /** If 'true', the app is in the initial state, which is waiting to download. */
            DownloadWaiting: boolean | undefined;
            /** If 'true', the user paused the download. */
            DownloadPaused: boolean | undefined;
            /** If 'true', the user canceled the download. */
            DownloadCancelled: boolean | undefined;
            /** If 'true', the app is an App Clip. Available in iOS 16 and later.
             *
             * - iOS:
             *    - introduced: 16.0
             *
             * - macOS:
             *    - introduced: n/a
             *
             * - tvOS:
             *    - introduced: n/a
             *
             * - watchOS:
             *    - introduced: n/a
             */
            IsAppClip: boolean | undefined;
            /** The source of the application. When the app is managed by Declarative Device Management this value is 'Declarative Device Management'.
             *
             * - iOS:
             *    - introduced: 17.2
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
            Source: string | undefined;
        }
    >;
};
