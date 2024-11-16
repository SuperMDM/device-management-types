import { z } from 'https://deno.land/x/zod/mod.ts';
export const DeviceLocation = z.object({
    Latitude: z.number(),
    Longitude: z.number(),
    HorizontalAccuracy: z.number().optional(),
    VerticalAccuracy: z.number().optional(),
    Altitude: z.number().optional(),
    Speed: z.number().optional(),
    Course: z.number().optional(),
    Timestamp: z.string().optional(),
});
