export type ManagedApplicationList = {
  ManagedApplicationList: {
    'ANY app identifier': {
      Status: string;
      ManagementFlags: number;
      UnusedRedemptionCode: string | undefined;
      HasConfiguration: boolean | undefined;
      HasFeedback: boolean | undefined;
      IsValidated: boolean | undefined;
      ExternalVersionIdentifier: number | undefined;
    };
  };
};
