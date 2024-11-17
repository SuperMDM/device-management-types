import { z } from 'https://deno.land/x/zod/mod.ts';
export const DeclarativeManagement = z.object({
    MessageType: z.string(),
    Endpoint: z.string(),
    Data: z.string().optional(),
    UDID: z.string().optional(),
    EnrollmentID: z.string().optional(),
    EnrollmentUserID: z.string().optional(),
    UserShortName: z.string().optional(),
    UserID: z.string().optional(),
    UserLongName: z.string().optional(),
});
