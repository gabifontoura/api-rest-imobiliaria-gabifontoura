import { Router } from "express";
import { createScheduleAppointmentController } from "../controllers/schedules.controllers";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middlewares";

import { ensurePermission } from "../middlewares/ensurePermission.middlewares";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middlewares";
import { scheduleSchema } from "../schemas/schedules.schemas";

const schedulesRoutes: Router = Router();

schedulesRoutes.post("", ensureTokenIsValid, ensurePermission, ensureDataIsValid(scheduleSchema), createScheduleAppointmentController)


export default schedulesRoutes