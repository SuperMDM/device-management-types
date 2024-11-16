export type DeviceInformation = {
  QueryResponses: {
    UDID: string;
    ProvisioningUDID: string | undefined;
    OrganizationInfo: {
      OrganizationName: string;
      OrganizationAddress: string | undefined;
      OrganizationPhone: string | undefined;
      OrganizationEmail: string | undefined;
      OrganizationMagic: string | undefined;
    } | undefined;
    MDMOptions: {
      ActivationLockAllowedWhileSupervised: boolean | undefined;
      BootstrapTokenAllowed: boolean | undefined;
      PromptUserToAllowBootstrapTokenForAuthentication: boolean | undefined;
    } | undefined;
    LastCloudBackupDate: Date | undefined;
    AwaitingConfiguration: boolean | undefined;
    iTunesStoreAccountIsActive: boolean | undefined;
    iTunesStoreAccountHash: string | undefined;
    DeviceName: string;
    OSVersion: string;
    SupplementalOSVersionExtra: string | undefined;
    BuildVersion: string;
    SupplementalBuildVersion: string | undefined;
    ModelName: string;
    Model: string | undefined;
    ModelNumber: string;
    IsAppleSilicon: boolean | undefined;
    ProductName: string;
    SerialNumber: string;
    DeviceCapacity: number | undefined;
    AvailableDeviceCapacity: number | undefined;
    IMEI: string | undefined;
    MEID: string | undefined;
    ModemFirmwareVersion: string | undefined;
    CellularTechnology: number | undefined;
    BatteryLevel: number | undefined;
    HasBattery: boolean | undefined;
    IsSupervised: boolean | undefined;
    IsMultiUser: boolean | undefined;
    IsDeviceLocatorServiceEnabled: boolean | undefined;
    IsActivationLockEnabled: boolean | undefined;
    IsActivationLockSupported: boolean | undefined;
    IsDoNotDisturbInEffect: boolean | undefined;
    SupportsLOMDevice: boolean | undefined;
    DeviceID: string | undefined;
    EASDeviceIdentifier: string | undefined;
    IsCloudBackupEnabled: boolean | undefined;
    ActiveManagedUsers: Array<string> | undefined;
    OSUpdateSettings: {
      CatalogURL: string | undefined;
      IsDefaultCatalog: boolean;
      PreviousScanDate: Date;
      PreviousScanResult: string | undefined;
      PerformPeriodicCheck: boolean;
      AutoCheckEnabled: boolean;
      BackgroundDownloadEnabled: boolean;
      AutomaticAppInstallationEnabled: boolean;
      AutomaticOSInstallationEnabled: boolean;
      AutomaticSecurityUpdatesEnabled: boolean;
    } | undefined;
    LocalHostName: string | undefined;
    HostName: string | undefined;
    AutoSetupAdminAccounts:
      | Array<
        {
          GUID: string;
          shortName: string;
        }
      >
      | undefined;
    SystemIntegrityProtectionEnabled: boolean | undefined;
    IsMDMLostModeEnabled: boolean | undefined;
    MaximumResidentUsers: number | undefined;
    EstimatedResidentUsers: number | undefined;
    QuotaSize: number | undefined;
    ResidentUsers: number | undefined;
    UserSessionTimeout: number | undefined;
    TemporarySessionTimeout: number | undefined;
    TemporarySessionOnly: boolean | undefined;
    ManagedAppleIDDefaultDomains: Array<string> | undefined;
    OnlineAuthenticationGracePeriod: number | undefined;
    SkipLanguageAndLocaleSetupForNewUsers: boolean | undefined;
    PushToken: string | undefined;
    DiagnosticSubmissionEnabled: boolean | undefined;
    AppAnalyticsEnabled: boolean | undefined;
    TimeZone: string | undefined;
    ICCID: string | undefined;
    BluetoothMAC: string | undefined;
    WiFiMAC: string;
    EthernetMAC: string | undefined;
    CurrentCarrierNetwork: string | undefined;
    SIMCarrierNetwork: string | undefined;
    SubscriberCarrierNetwork: string | undefined;
    CarrierSettingsVersion: string | undefined;
    PhoneNumber: string | undefined;
    DataRoamingEnabled: boolean | undefined;
    VoiceRoamingEnabled: boolean | undefined;
    PersonalHotspotEnabled: boolean | undefined;
    IsNetworkTethered: boolean | undefined;
    IsRoaming: boolean | undefined;
    SIMMCC: string | undefined;
    SIMMNC: string | undefined;
    SubscriberMCC: string | undefined;
    SubscriberMNC: string | undefined;
    CurrentMCC: string | undefined;
    CurrentMNC: string | undefined;
    ServiceSubscriptions:
      | Array<
        {
          CarrierSettingsVersion: string;
          CurrentCarrierNetwork: string;
          CurrentMCC: string;
          CurrentMNC: string;
          ICCID: string;
          EID: string | undefined;
          IMEI: string;
          IsDataPreferred: boolean;
          IsRoaming: boolean;
          IsVoicePreferred: boolean;
          Label: string;
          LabelID: string;
          MEID: string;
          PhoneNumber: string;
          Slot: string;
          SubscriberCarrierNetwork: string | undefined;
        }
      >
      | undefined;
    PINRequiredForEraseDevice: boolean | undefined;
    PINRequiredForDeviceLock: boolean | undefined;
    SupportsiOSAppInstalls: boolean | undefined;
    SoftwareUpdateDeviceID: string | undefined;
    SoftwareUpdateSettings: {
      RecommendationsCadence: number;
    } | undefined;
    AccessibilitySettings: {
      BoldTextEnabled: boolean;
      IncreaseContrastEnabled: boolean | undefined;
      ReduceMotionEnabled: boolean;
      ReduceTransparencyEnabled: boolean;
      TextSize: number;
      TouchAccommodationsEnabled: boolean;
      VoiceOverEnabled: boolean;
      ZoomEnabled: boolean;
      GrayscaleEnabled: boolean | undefined;
    } | undefined;
    DevicePropertiesAttestation: Array<string> | undefined;
    EACSPreflight: string | undefined;
  };
};
