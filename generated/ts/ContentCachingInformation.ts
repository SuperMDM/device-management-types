export type ContentCachingInformation = {
  StatusResponse: {
    Activated: boolean | undefined;
    Active: boolean | undefined;
    ActualCacheUsed: number | undefined;
    AlertsForPeerFilterRanges: {
      "ANY index": {
        className: string;
        postDate: Date;
        peerFilterRangeIndex: number;
        addresses: Array<string>;
      };
    } | undefined;
    Alerts:
      | Array<
        {
          className: string;
          postDate: Date;
          cacheLimit: number | undefined;
          reservedVolumeSpace: number | undefined;
          resource: string | undefined;
          pathPreventingAccess: string | undefined;
        }
      >
      | undefined;
    CacheDetails: {
      "Category Name": number;
    } | undefined;
    CacheFree: number | undefined;
    CacheLimit: number | undefined;
    CacheStatus: string | undefined;
    CacheUsed: number | undefined;
    DataMigrationCompleted: boolean | undefined;
    DataMigrationError: {
      domain: string;
      code: number;
      userInfo: {
        ANY: any | undefined;
      } | undefined;
    } | undefined;
    DataMigrationProgress: number | undefined;
    MaxCachePressureLast1Hour: number | undefined;
    Parents:
      | Array<
        {
          address: string;
          alert: {
            className: string;
            postDate: Date;
            addresses: Array<string>;
          } | undefined;
          details: {
            "ac-power": boolean | undefined;
            "cache-size": number | undefined;
            capabilities: {
              im: boolean | undefined;
              ns: boolean | undefined;
              pc: boolean | undefined;
              "query-parameters": boolean | undefined;
              sc: boolean | undefined;
              ur: boolean | undefined;
            } | undefined;
            "is-portable": boolean | undefined;
            "local-network": {
              speed: number | undefined;
              wired: boolean | undefined;
            } | undefined;
          };
          guid: string;
          healthy: boolean;
          port: number;
          version: string;
        } | undefined
      >
      | undefined;
    Peers:
      | Array<
        {
          address: string;
          alert: {
            className: string;
            postDate: Date;
            addresses: Array<string> | undefined;
            peerAddress: string | undefined;
          } | undefined;
          details: {
            "ac-power": boolean | undefined;
            "cache-size": number | undefined;
            capabilities: {
              im: boolean | undefined;
              ns: boolean | undefined;
              pc: boolean | undefined;
              "query-parameters": boolean | undefined;
              sc: boolean | undefined;
              ur: boolean | undefined;
            } | undefined;
            "is-portable": boolean | undefined;
            "local-network": {
              speed: number | undefined;
              wired: boolean | undefined;
            } | undefined;
          };
          friendly: boolean;
          guid: string;
          healthy: boolean;
          port: number;
          version: string;
        } | undefined
      >
      | undefined;
    PersonalCacheFree: number | undefined;
    PersonalCacheLimit: number | undefined;
    PersonalCacheUsed: number | undefined;
    Port: number | undefined;
    PrivateAddresses: Array<string> | undefined;
    PublicAddress: string | undefined;
    RegistrationError: string | undefined;
    RegistrationResponseCode: number | undefined;
    RegistrationStarted: Date | undefined;
    RegistrationStatus: number | undefined;
    RestrictedMedia: boolean | undefined;
    ServerGUID: string | undefined;
    StartupStatus: string | undefined;
    TetheratorStatus: number | undefined;
    TotalBytesAreSince: Date | undefined;
    TotalBytesDropped: number | undefined;
    TotalBytesImported: number | undefined;
    TotalBytesReturnedToChildren: number | undefined;
    TotalBytesReturnedToClients: number | undefined;
    TotalBytesReturnedToPeers: number | undefined;
    TotalBytesStoredFromOrigin: number | undefined;
    TotalBytesStoredFromParents: number | undefined;
    TotalBytesStoredFromPeers: number | undefined;
  };
};
