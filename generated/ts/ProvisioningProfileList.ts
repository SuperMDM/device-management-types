export type ProvisioningProfileList = {
  ProvisioningProfileList: Array<
    {
      Name: string;
      UUID: string;
      ExpiryDate: Date | undefined;
    }
  >;
};
