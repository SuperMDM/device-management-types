export type ManagedApplicationAttributes = {
    ApplicationAttributes: Array<
        {
            Identifier: string;
            Attributes: {
                VPNUUID: string | undefined;
                ContentFilterUUID: string | undefined;
                DNSProxyUUID: string | undefined;
                RelayUUID: string | undefined;
                AssociatedDomains: Array<string> | undefined;
                AssociatedDomainsEnableDirectDownloads: boolean | undefined;
                Removable: boolean | undefined;
                TapToPayScreenLock: boolean | undefined;
                CellularSliceUUID: string | undefined;
                Hideable: boolean | undefined;
                Lockable: boolean | undefined;
            } | undefined;
        }
    >;
};
