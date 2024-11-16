import { z } from 'https://deno.land/x/zod/mod.ts';
export const Restrictions = z.object({
  GlobalRestrictions: z.object({
    restrictedBool: z.object({
      'ANY restriction name': z.object({
        value: z.boolean(),
      }).optional(),
    }).optional(),
    restrictedValue: z.object({
      'ANY restriction name': z.object({
        value: z.number(),
      }).optional(),
    }).optional(),
    intersection: z.object({
      'ANY restriction name': z.object({
        values: z.array(z.string()),
      }).optional(),
    }).optional(),
    union: z.object({
      'ANY restriction name': z.object({
        values: z.array(z.string()),
      }).optional(),
    }).optional(),
  }),
  ProfileRestrictions: z.object({
    'ANY profile identifier': z.object({
      restrictedBool: z.object({
        'ANY restriction name': z.object({
          value: z.boolean(),
        }).optional(),
      }).optional(),
      restrictedValue: z.object({
        'ANY restriction name': z.object({
          value: z.number(),
        }).optional(),
      }).optional(),
      intersection: z.object({
        'ANY restriction name': z.object({
          values: z.array(z.string()),
        }).optional(),
      }).optional(),
      union: z.object({
        'ANY restriction name': z.object({
          values: z.array(z.string()),
        }).optional(),
      }).optional(),
    }).optional(),
  }),
});
