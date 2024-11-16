export type ProfileList = {
    ProfileList: Array<
        {
            PayloadUUID: string;
            PayloadIdentifier: string;
            PayloadVersion: number | undefined;
            PayloadDisplayName: string | undefined;
            PayloadOrganization: string | undefined;
            PayloadDescription: string | undefined;
            PayloadRemovalDisallowed: boolean | undefined;
            HasRemovalPasscode: boolean | undefined;
            IsEncrypted: boolean | undefined;
            SignerCertificates: Array<string> | undefined;
            IsManaged: boolean | undefined;
            Source: string | undefined;
            PayloadContent:
                | Array<
                    {
                        PayloadType: string;
                        PayloadVersion: number;
                        PayloadIdentifier: string;
                        PayloadUUID: string | undefined;
                        PayloadDisplayName: string | undefined;
                        PayloadDescription: string | undefined;
                        PayloadOrganization: string | undefined;
                    }
                >
                | undefined;
        }
    >;
};
