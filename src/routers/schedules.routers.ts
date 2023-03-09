import { Router } from "express";
import { createScheduleAppointmentController, listPropertyScheduleController } from "../controllers/schedules.controllers";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middlewares";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin.middlewares";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middlewares";
import { scheduleSchema } from "../schemas/schedules.schemas";

const schedulesRoutes: Router = Router();

schedulesRoutes.post("", ensureTokenIsValid, ensureDataIsValid(scheduleSchema), createScheduleAppointmentController)
schedulesRoutes.get("/realEstate/:id", ensureTokenIsValid, ensureIsAdmin, listPropertyScheduleController)

export default schedulesRoutes