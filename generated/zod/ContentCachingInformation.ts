import { z } from "https://deno.land/x/zod/mod.ts";
export const ContentCachingInformation = z.object({
  StatusResponse: z.object({
    Activated: z.boolean().optional(),
    Active: z.boolean().optional(),
    ActualCacheUsed: z.number().optional(),
    AlertsForPeerFilterRanges: z.object({
      "ANY index": z.object({
        className: z.string(),
        postDate: z.date(),
        peerFilterRangeIndex: z.number(),
        addresses: z.array(z.string()),
      }),
    }).optional(),
    Alerts: z.array(
      z.object({
        className: z.string(),
        postDate: z.date(),
        cacheLimit: z.number().optional(),
        reservedVolumeSpace: z.number().optional(),
        resource: z.string().optional(),
        pathPreventingAccess: z.string().optional(),
      }),
    ).optional(),
    CacheDetails: z.object({
      "Category Name": z.number(),
    }).optional(),
    CacheFree: z.number().optional(),
    CacheLimit: z.number().optional(),
    CacheStatus: z.string().optional(),
    CacheUsed: z.number().optional(),
    DataMigrationCompleted: z.boolean().optional(),
    DataMigrationError: z.object({
      domain: z.string(),
      code: z.number(),
      userInfo: z.object({
        ANY: z.any().optional(),
      }).optional(),
    }).optional(),
    DataMigrationProgress: z.number().optional(),
    MaxCachePressureLast1Hour: z.number().optional(),
    Parents: z.array(
      z.object({
        address: z.string(),
        alert: z.object({
          className: z.string(),
          postDate: z.date(),
          addresses: z.array(z.string()),
        }).optional(),
        details: z.object({
          "ac-power": z.boolean().optional(),
          "cache-size": z.number().optional(),
          capabilities: z.object({
            im: z.boolean().optional(),
            ns: z.boolean().optional(),
            pc: z.boolean().optional(),
            "query-parameters": z.boolean().optional(),
            sc: z.boolean().optional(),
            ur: z.boolean().optional(),
          }).optional(),
          "is-portable": z.boolean().optional(),
          "local-network": z.object({
            speed: z.number().optional(),
            wired: z.boolean().optional(),
          }).optional(),
        }),
        guid: z.string(),
        healthy: z.boolean(),
        port: z.number(),
        version: z.string(),
      }).optional(),
    ).optional(),
    Peers: z.array(
      z.object({
        address: z.string(),
        alert: z.object({
          className: z.string(),
          postDate: z.date(),
          addresses: z.array(z.string()).optional(),
          peerAddress: z.string().optional(),
        }).optional(),
        details: z.object({
          "ac-power": z.boolean().optional(),
          "cache-size": z.number().optional(),
          capabilities: z.object({
            im: z.boolean().optional(),
            ns: z.boolean().optional(),
            pc: z.boolean().optional(),
            "query-parameters": z.boolean().optional(),
            sc: z.boolean().optional(),
            ur: z.boolean().optional(),
          }).optional(),
          "is-portable": z.boolean().optional(),
          "local-network": z.object({
            speed: z.number().optional(),
            wired: z.boolean().optional(),
          }).optional(),
        }),
        friendly: z.boolean(),
        guid: z.string(),
        healthy: z.boolean(),
        port: z.number(),
        version: z.string(),
      }).optional(),
    ).optional(),
    PersonalCacheFree: z.number().optional(),
    PersonalCacheLimit: z.number().optional(),
    PersonalCacheUsed: z.number().optional(),
    Port: z.number().optional(),
    PrivateAddresses: z.array(z.string()).optional(),
    PublicAddress: z.string().optional(),
    RegistrationError: z.string().optional(),
    RegistrationResponseCode: z.number().optional(),
    RegistrationStarted: z.date().optional(),
    RegistrationStatus: z.number().optional(),
    RestrictedMedia: z.boolean().optional(),
    ServerGUID: z.string().optional(),
    StartupStatus: z.string().optional(),
    TetheratorStatus: z.number().optional(),
    TotalBytesAreSince: z.date().optional(),
    TotalBytesDropped: z.number().optional(),
    TotalBytesImported: z.number().optional(),
    TotalBytesReturnedToChildren: z.number().optional(),
    TotalBytesReturnedToClients: z.number().optional(),
    TotalBytesReturnedToPeers: z.number().optional(),
    TotalBytesStoredFromOrigin: z.number().optional(),
    TotalBytesStoredFromParents: z.number().optional(),
    TotalBytesStoredFromPeers: z.number().optional(),
  }),
});
