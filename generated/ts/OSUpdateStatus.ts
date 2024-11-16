export type OSUpdateStatus = {
  OSUpdateStatus: Array<
    {
      ProductKey: string;
      IsDownloaded: boolean;
      DownloadPercentComplete: number;
      Status: string;
      MaxDeferrals: number | undefined;
      DeferralsRemaining: number | undefined;
      NextScheduledInstall: Date | undefined;
      PastNotifications: Array<Date> | undefined;
    }
  >;
};
