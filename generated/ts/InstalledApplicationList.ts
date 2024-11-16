export type InstalledApplicationList = {
    InstalledApplicationList: Array<
        {
            Identifier: string | undefined;
            ExternalVersionIdentifier: number | undefined;
            DistributorIdentifier: string | undefined;
            Version: string | undefined;
            ShortVersion: string | undefined;
            Name: string | undefined;
            BundleSize: number | undefined;
            DynamicSize: number | undefined;
            IsValidated: boolean | undefined;
            Installing: boolean | undefined;
            AppStoreVendable: boolean | undefined;
            DeviceBasedVPP: boolean | undefined;
            BetaApp: boolean | undefined;
            AdHocCodeSigned: boolean | undefined;
            HasUpdateAvailable: boolean | undefined;
            DownloadFailed: boolean | undefined;
            DownloadWaiting: boolean | undefined;
            DownloadPaused: boolean | undefined;
            DownloadCancelled: boolean | undefined;
            IsAppClip: boolean | undefined;
            Source: string | undefined;
        }
    >;
};
