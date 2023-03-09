import { Request, Response } from "express";
import { tScheduleReturn } from "../interfaces/schedules.interfaces";
import { createScheduleAppointmentService } from "../services/schedules/createScheduleAppointment.service";

export const createScheduleAppointmentController = async (req: Request, res: Response) => {
    
    const appointment = req.body;
    const userId = req.user.id
  
    const newAppointment: tScheduleReturn = await createScheduleAppointmentService(appointment, userId);
  
    return res.status(201).json(newAppointment);
  };