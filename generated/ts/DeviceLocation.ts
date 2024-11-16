export type DeviceLocation = {
  Latitude: number;
  Longitude: number;
  HorizontalAccuracy: number | undefined;
  VerticalAccuracy: number | undefined;
  Altitude: number | undefined;
  Speed: number | undefined;
  Course: number | undefined;
  Timestamp: string | undefined;
};
