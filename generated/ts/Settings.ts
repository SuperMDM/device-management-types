export type Settings = {
    Settings: {
        Status: string;
        ErrorChain:
            | Array<
                {
                    ANY: any;
                }
            >
            | undefined;
        Identifier: string | undefined;
    } | undefined;
};
