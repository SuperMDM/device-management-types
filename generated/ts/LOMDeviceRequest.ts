export type LOMDeviceRequest = {
  ResponseList: Array<
    {
      DeviceRequestSuccess: boolean;
      DeviceRequestUUID: string;
      DeviceRequestReturnError: string | undefined;
    }
  >;
};
