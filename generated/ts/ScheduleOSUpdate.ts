export type ScheduleOSUpdate = {
  UpdateResults: Array<
    {
      ProductKey: string;
      InstallAction: string;
      Status: string;
      ErrorChain:
        | Array<
          {
            ANY: any;
          }
        >
        | undefined;
    }
  >;
};
