export type ActiveNSExtensions = {
  Extensions: Array<
    {
      Identifier: string;
      ExtensionPoint: string;
      DisplayName: string;
      ContainerDisplayName: string | undefined;
      ContainerIdentifier: string | undefined;
      Path: string;
      Version: string;
      UserElection: string;
    }
  >;
};
