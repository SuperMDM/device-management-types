export type ManagedApplicationConfiguration = {
    ApplicationConfigurations: Array<
        {
            Identifier: string;
            Configuration: {
                ANY: any | undefined;
            } | undefined;
        }
    >;
};
