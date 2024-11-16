export type ManagedMediaList = {
    Books: Array<
        {
            iTunesStoreID: number;
            State: string | undefined;
            PersistentID: string | undefined;
            Kind: string | undefined;
            Version: string | undefined;
            Author: string | undefined;
            Title: string | undefined;
        }
    >;
};
