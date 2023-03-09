import * as z from "zod";

export const scheduleSchema = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().int(),
});

export const returnAppointmentSchema = scheduleSchema.extend({
  id: z.number().int(),
  userId: z.number().int(),
});
