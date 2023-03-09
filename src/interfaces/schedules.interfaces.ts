import { z } from "zod";
import { returnAppointmentSchema, scheduleSchema } from "../schemas/schedules.schemas";

export type tSchedule = z.infer<typeof scheduleSchema>

export type tScheduleReturn = z.infer<typeof returnAppointmentSchema>