import { Request, Response } from "express";
import { createScheduleAppointmentService } from "../services/schedules/createScheduleAppointment.service";
import { listPropertyScheduleService } from "../services/schedules/listPropertySchedule.services";

export const createScheduleAppointmentController = async (req: Request, res: Response) => {
    
    const appointment = req.body;
    const userId = req.user.id
  
    await createScheduleAppointmentService(appointment, userId);
  
    return res.status(201).json({message: "Schedule created"});
  };


export const listPropertyScheduleController = async (req: Request, res: Response) => {

    const realEstateId = parseInt(req.params.id)
  
    const scheduleList = await listPropertyScheduleService(realEstateId);
  
    return res.json(scheduleList);
  };

