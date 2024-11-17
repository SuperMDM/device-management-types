import { z } from 'https://deno.land/x/zod/mod.ts';
export const Authenticate = z.object({
    DeviceName: z.string().optional(),
    ModelName: z.string().optional(),
    Model: z.string().optional(),
    MessageType: z.string(),
    Topic: z.string(),
    UDID: z.string().optional(),
    EnrollmentID: z.string().optional(),
    OSVersion: z.string().optional(),
    BuildVersion: z.string().optional(),
    ProductName: z.string().optional(),
    SerialNumber: z.string().optional(),
    IMEI: z.string().optional(),
    MEID: z.string().optional(),
});
