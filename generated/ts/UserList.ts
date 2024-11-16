export type UserList = {
  Users: Array<
    {
      UserName: string;
      FullName: string | undefined;
      UID: number | undefined;
      UserGUID: string | undefined;
      IsLoggedIn: boolean;
      HasDataToSync: boolean | undefined;
      DataQuota: number | undefined;
      DataUsed: number | undefined;
      MobileAccount: boolean | undefined;
      HasSecureToken: boolean | undefined;
    }
  >;
};
