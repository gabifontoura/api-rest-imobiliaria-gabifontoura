import { z } from "zod";
import { returnAllAppointmentsSchema, returnAppointmentSchema, scheduleSchema } from "../schemas/schedules.schemas";

export type tSchedule = z.infer<typeof scheduleSchema>

export type tScheduleReturn = z.infer<typeof returnAppointmentSchema>

export type tAllScheduleReturn = z.infer<typeof returnAllAppointmentsSchema>
