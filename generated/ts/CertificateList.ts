export type CertificateList = {
    CertificateList: Array<
        {
            CommonName: string;
            IsIdentity: boolean;
            Data: string;
        }
    >;
};
