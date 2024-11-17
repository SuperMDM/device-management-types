import { z } from 'https://deno.land/x/zod/mod.ts';
export const CheckOut = z.object({
    MessageType: z.string(),
    Topic: z.string(),
    UDID: z.string().optional(),
    EnrollmentID: z.string().optional(),
});
