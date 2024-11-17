export type TokenUpdate = {
    NotOnConsole: boolean | undefined;
    MessageType: string;
    Topic: string;
    UDID: string | undefined;
    EnrollmentID: string | undefined;
    EnrollmentUserID: string | undefined;
    UserShortName: string | undefined;
    UserID: string | undefined;
    UserLongName: string | undefined;
    Token: string;
    PushMagic: string;
    UnlockToken: string | undefined;
    AwaitingConfiguration: boolean | undefined;
};
