import { z } from 'https://deno.land/x/zod/mod.ts';
export const TokenUpdate = z.object({
    NotOnConsole: z.boolean().optional(),
    MessageType: z.string(),
    Topic: z.string(),
    UDID: z.string().optional(),
    EnrollmentID: z.string().optional(),
    EnrollmentUserID: z.string().optional(),
    UserShortName: z.string().optional(),
    UserID: z.string().optional(),
    UserLongName: z.string().optional(),
    Token: z.string(),
    PushMagic: z.string(),
    UnlockToken: z.string().optional(),
    AwaitingConfiguration: z.boolean().optional(),
});
