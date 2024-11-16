export type AvailableOSUpdates = {
    AvailableOSUpdates: Array<
        {
            ProductKey: string;
            HumanReadableName: string;
            HumanReadableNameLocale: string | undefined;
            MetadataURL: string | undefined;
            ProductName: string | undefined;
            Version: string;
            Build: string;
            DownloadSize: number | undefined;
            InstallSize: number | undefined;
            AppIdentifiersToClose: Array<string> | undefined;
            IsCritical: boolean | undefined;
            IsConfigDataUpdate: boolean | undefined;
            IsFirmwareUpdate: boolean | undefined;
            IsMajorOSUpdate: boolean | undefined;
            RestartRequired: boolean | undefined;
            AllowsInstallLater: boolean | undefined;
            DeferredUntil: Date | undefined;
            RequiresBootstrapToken: boolean | undefined;
            IsSecurityResponse: boolean | undefined;
            SupplementalBuildVersion: string | undefined;
            SupplementalOSVersionExtra: string | undefined;
        }
    >;
};
