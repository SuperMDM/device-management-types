/** This command allows the server to query for information about Content Caching.
 *
 * - iOS:
 *    - introduced: n/a
 *
 * - macOS:
 *    - introduced: 10.15.4
 *    - accessrights: AllowQueryNetworkInformation
 *    - devicechannel: true
 *    - userchannel: false
 *    - requiresdep: false
 *    - userenrollment: {mode:forbidden}
 *
 * - tvOS:
 *    - introduced: n/a
 *
 * - visionOS:
 *    - introduced: n/a
 *
 * - watchOS:
 *    - introduced: n/a
 */
export type ContentCachingInformation = {
    /** A dictionary that contains the status of content caching on a device. */
    StatusResponse: {
        /** If 'true', the device has enabled content caching. Enabling content caching doesn't guarantee service. See the 'Active' key for the readiness of content caching to serve requests. */
        Activated: boolean | undefined;
        /** If 'true', content caching is ready to serve requests. */
        Active: boolean | undefined;
        /** The actual amount of disk space, in bytes, that cached content uses. See related values 'CacheUsed' and 'PersonalCacheUsed'. */
        ActualCacheUsed: number | undefined;
        /** The error conditions the content cache detected in the 'PeerFilterRanges' in the installed 'com.apple.AssetCache.managed' payload.
         * To display these alerts on the device, set 'DisplayAlerts' to 'true' in the installed ContentCaching profile. */
        AlertsForPeerFilterRanges: {
            /** A dictionary that describes the alerts for the peer filter ranges. The key name is  the index into the PeerFilterRanges array in the installed com.apple.AssetCache.managed payload. */
            'ANY index': {
                /** The type of the alert. */
                className: string;
                /** The date of the alert. */
                postDate: Date;
                /** The index into the 'PeerFilterRanges' in the installed ContentCaching payload. */
                peerFilterRangeIndex: number;
                /** An array of local IP addresses of peer content caches that rejected requests from the content cache. */
                addresses: Array<string>;
            };
        } | undefined;
        /** An array that contains the error conditions the content cache detected that aren't related to peer filter ranges, parent content caches, or peer content caches.
         * See 'AlertsForPeerFilterRanges' for errors related to peer filter ranges.
         * See 'Parents' and 'Peers' for errors related to parent and peer content caches.
         * To display these alerts on the device, set 'DisplayAlerts' to 'true' in the installed ContentCaching profile. */
        Alerts:
            | Array<
                {
                    /** The type of the alert. */
                    className: string;
                    /** The date of the alert. */
                    postDate: Date;
                    /** The limit, in bytes, for the content cache at the time of the alert. This value only applies to 'AssetCacheLowSpaceAlert' and 'AssetCacheNoSpaceAlert' types. */
                    cacheLimit: number | undefined;
                    /** The space, in bytes, that the system reserves at the time of the alert. This value only applies to the 'AssetCacheLowSpaceAlert' and 'AssetCacheNoSpaceAlert' types. */
                    reservedVolumeSpace: number | undefined;
                    /** The resource that was missing or inaccessible at the time of the alert. This value only applies to the 'AssetCacheResourceMissingAlert' type. */
                    resource: string | undefined;
                    /** The subpath of the resource that was missing or inaccessible at the time of the alert. This value only applies to the 'AssetCacheResourceMissingAlert' type. */
                    pathPreventingAccess: string | undefined;
                }
            >
            | undefined;
        /** The amount of disk space that various categories of cached content use. Apple defines these categories and they're subject to change. */
        CacheDetails: {
            /** The amount of disk space, in bytes, that this category of cached content uses. */
            'Category Name': number;
        } | undefined;
        /** The amount of disk space, in bytes, available to the content cache. */
        CacheFree: number | undefined;
        /** The maximum amount of disk space, in bytes, available to the content cache. A value of '0' indicates an unlimited amount. This value corresponds to 'CacheLimit' in the installed ContentCaching profile. */
        CacheLimit: number | undefined;
        /** The level of cache pressure. 'LowSpace' means cache pressure is high. */
        CacheStatus: string | undefined;
        /** The amount of disk space, in bytes, cached content uses. Content caching allocates space in its cache for entire files even when it stores only part of those files in its cache. */
        CacheUsed: number | undefined;
        /** If 'true', the content cache finished moving from one volume to another. */
        DataMigrationCompleted: boolean | undefined;
        /** The error that occurred while the content cache moved from one volume to another. */
        DataMigrationError: {
            /** The error domain. */
            domain: string;
            /** The error code. */
            code: number;
            /** A dictionary that contains additional information about the error. */
            userInfo: {
                /** A dictionary that contains additional details about the error. */
                ANY: any | undefined;
            } | undefined;
        } | undefined;
        /** A floating-point number between '0.0' and '1.0' that indicates the percentage of progress in moving the content cache from one volume to another. A value of '1.0' indicates that the content cache has fully migrated. */
        DataMigrationProgress: number | undefined;
        /** A floating-point number between '0.0' and '1.0' that represents how often the cache needed more disk space over the last hour of operation. A lower value is better. */
        MaxCachePressureLast1Hour: number | undefined;
        /** An array of dictionaries that describes parent content caches. */
        Parents:
            | Array<
                {
                    /** The local IP address of the parent content cache. */
                    address: string;
                    /** A dictionary that describes an alert related to the parent content cache. */
                    alert: {
                        /** The type of the alert. */
                        className: string;
                        /** The date of the alert. */
                        postDate: Date;
                        /** An array of local IP addresses of parent content caches. */
                        addresses: Array<string>;
                    } | undefined;
                    /** A dictionary that contains additional details about the parent content cache. */
                    details: {
                        /** If 'true', the parent content cache power source is AC; otherwise, an internal battery provides its power. */
                        'ac-power': boolean | undefined;
                        /** The maximum amount of disk space, in bytes, available to the parent content cache. */
                        'cache-size': number | undefined;
                        /** A dictionary that describes the capabilities of the parent content cache. */
                        capabilities: {
                            /** If 'true', the parent content cache is capable of imports and uploads. */
                            im: boolean | undefined;
                            /** If 'true', the parent content cache is capable of handling namespaces, which is an aspect of personal caching. */
                            ns: boolean | undefined;
                            /** If 'true', the parent content cache is capable of caching personal iCloud content. */
                            pc: boolean | undefined;
                            /** If 'true', the parent content cache is capable of handling query parameters in URLs. */
                            'query-parameters': boolean | undefined;
                            /** If 'true', the parent content cache is capable of caching shared non-iCloud content. */
                            sc: boolean | undefined;
                            /** If 'true', the parent content cache is capable of prioritizing imports and uploads. */
                            ur: boolean | undefined;
                        } | undefined;
                        /** If 'true', the parent content cache computer is portable; for example, a laptop. */
                        'is-portable': boolean | undefined;
                        /** A dictionary that describes the parent content cache's connection to its local network. */
                        'local-network': {
                            /** The transfer speed, in megabits per second, of the parent content cache's connection to its local network. */
                            speed: number | undefined;
                            /** If 'true', the parent content cache has a wired connection to its local network. If 'false', it has a wireless connection; for example, Wi-Fi. */
                            wired: boolean | undefined;
                        } | undefined;
                    };
                    /** The unique identifier of the parent content cache. */
                    guid: string;
                    /** If 'true,' the parent content cache is able to respond to requests from this content cache. */
                    healthy: boolean;
                    /** The IP port number the parent content cache listens to for requests. */
                    port: number;
                    /** The version number of the parent content cache software. */
                    version: string;
                } | undefined
            >
            | undefined;
        /** An array of dictionaries that describes peer content caches. */
        Peers:
            | Array<
                {
                    /** The local IP address of the peer content cache. */
                    address: string;
                    /** A dictionary that describes an alert related to the peer content cache. */
                    alert: {
                        /** The type of the alert. */
                        className: string;
                        /** The date of the alert. */
                        postDate: Date;
                        /** An array of local IP addresses of peer content caches. */
                        addresses: Array<string> | undefined;
                        /** The local IP address of a peer content cache. */
                        peerAddress: string | undefined;
                    } | undefined;
                    /** A dictionary that contains additional details about the peer content cache. */
                    details: {
                        /** If 'true', the peer content cache power source is AC; otherwise, an internal battery provides its power. */
                        'ac-power': boolean | undefined;
                        /** The maximum amount of disk space, in bytes, available to the peer content cache. */
                        'cache-size': number | undefined;
                        /** A dictionary that describes the capabilities of the peer content cache. */
                        capabilities: {
                            /** If 'true', the peer content cache is capable of imports and uploads. */
                            im: boolean | undefined;
                            /** If 'true', the peer content cache is capable of handling namespaces, which is an aspect of personal caching. */
                            ns: boolean | undefined;
                            /** If 'true', the peer content cache is capable of caching personal iCloud content. */
                            pc: boolean | undefined;
                            /** If 'true', the peer content cache is capable of handling query parameters in URLs. */
                            'query-parameters': boolean | undefined;
                            /** If 'true', the peer content cache is capable of caching shared non-iCloud content. */
                            sc: boolean | undefined;
                            /** If 'true', the peer content cache is capable of prioritizing imports and uploads. */
                            ur: boolean | undefined;
                        } | undefined;
                        /** If 'true', the peer content cache computer is portable; for example, a laptop. */
                        'is-portable': boolean | undefined;
                        /** A dictionary that describes the peer content cache's connection to its local network. */
                        'local-network': {
                            /** The transfer speed, in megabits per second, of the peer content cache's connection to its local network. */
                            speed: number | undefined;
                            /** If 'true', the peer content cache has a wired connection to its local network. If 'false', it has a wireless connection; for example, Wi-Fi. */
                            wired: boolean | undefined;
                        } | undefined;
                    };
                    /** If 'true', the peer content cache is able to respond to requests from the content cache. */
                    friendly: boolean;
                    /** The unique identifier of the peer content cache. */
                    guid: string;
                    /** If 'true', the peer content cache is able to respond to requests from the content cache. */
                    healthy: boolean;
                    /** The IP port number the peer content cache listens to for requests. */
                    port: number;
                    /** The version number of the peer content cache software. */
                    version: string;
                } | undefined
            >
            | undefined;
        /** The amount of disk space, in bytes, available to the content cache for personal iCloud content. */
        PersonalCacheFree: number | undefined;
        /** The maximum amount of disk space, in bytes, available to the content cache for personal iCloud content. A value of '0' indicates an unlimited amount. */
        PersonalCacheLimit: number | undefined;
        /** The amount of disk space, in bytes, available to the content cache for personal iCloud content. */
        PersonalCacheUsed: number | undefined;
        /** The IP port number the content cache listens to for requests from clients, peers, and children. */
        Port: number | undefined;
        /** An array of the content cache's local IP addresses. */
        PrivateAddresses: Array<string> | undefined;
        /** The public IP address of the content cache. */
        PublicAddress: string | undefined;
        /** If present, the reason the content cache failed to register itself with Apple. */
        RegistrationError: string | undefined;
        /** If present, the HTTP response code the content cache received when it failed to register itself with Apple. */
        RegistrationResponseCode: number | undefined;
        /** The date when the content cache began registering itself with Apple. This value is only available during registration attempts. */
        RegistrationStarted: Date | undefined;
        /** The status of the content cache's registration with Apple, which is one of the following values:
         ** '-1:' Failed
         ** ' 0:' Pending
         ** ' 1:' Succeeded */
        RegistrationStatus: number | undefined;
        /** If 'true', a restriction prevents caching of certain content types. */
        RestrictedMedia: boolean | undefined;
        /** The unique identifier of the content cache. */
        ServerGUID: string | undefined;
        /** The status of the content cache's registration with Apple. */
        StartupStatus: string | undefined;
        /** The status of tethered caching, which is content caching with a shared internet connection, which is one of the following values:
         ** '-1:' Unknown
         ** ' 0:' Disabled
         ** ' 1:' Enabled */
        TetheratorStatus: number | undefined;
        /** The start date to use when collecting data for the other 'TotalBytes' values. */
        TotalBytesAreSince: Date | undefined;
        /** The amount of data, in bytes, that the content cache downloaded, but couldn't add to its cache, since the 'TotalBytesAreSince' date. */
        TotalBytesDropped: number | undefined;
        /** The amount of data, in bytes, that the content cache received since the 'TotalBytesAreSince' date. */
        TotalBytesImported: number | undefined;
        /** The amount of data, in bytes, that the content cache served to its child content cache since the 'TotalBytesAreSince' date. */
        TotalBytesReturnedToChildren: number | undefined;
        /** The amount of data, in bytes, that the content cache served to client iOS, macOS, and tvOS devices since the 'TotalBytesAreSince' date. */
        TotalBytesReturnedToClients: number | undefined;
        /** The amount of data, in bytes, that the content cache served to peer content caches since the 'TotalBytesAreSince' date. */
        TotalBytesReturnedToPeers: number | undefined;
        /** The amount of data, in bytes, that the content cache saved from the internet since the 'TotalBytesAreSince' date. */
        TotalBytesStoredFromOrigin: number | undefined;
        /** The amount of data, in bytes, that the content cache saved from parent content caches since the 'TotalBytesAreSince' date. */
        TotalBytesStoredFromParents: number | undefined;
        /** The amount of data, in bytes, that the content cache saved from peer content caches since the 'TotalBytesAreSince' date. */
        TotalBytesStoredFromPeers: number | undefined;
    };
};
