import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule } from "../../entities";
import { AppError } from "../../errors";
import {
  tSchedule,
  tScheduleReturn,
} from "../../interfaces/schedules.interfaces";
import { returnAppointmentSchema } from "../../schemas/schedules.schemas";

export const createScheduleAppointmentService = async (
  appointmentData: tSchedule,
  userId: number
): Promise<tScheduleReturn> => {
  const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
  const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule);

  const propertyId = appointmentData.realEstateId;

  const realEstate = await realEstateRepository.findOne({
    where: {
      id: propertyId,
    },
  });
  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const date = appointmentData.date;
  const hour = appointmentData.hour;


const userSchedule = await scheduleRepository
.createQueryBuilder("schedule")
.leftJoinAndSelect("schedule.user", "user")
.leftJoinAndSelect("schedule.realEstate", "realEstate")
.where("user.id = :userId", { userId })
.andWhere("schedule.date = :date", { date })
.andWhere("schedule.hour = :hour", { hour })
.getOne();

if (userSchedule) {
throw new AppError(
    "User schedule to this real estate at this date and time already exists",
    409
);
}

const existingSchedule = await scheduleRepository
    .createQueryBuilder("schedule")
    .where("schedule.date = :date AND schedule.hour = :hour", { date, hour })
    .getOne();

if (existingSchedule) {
    throw new AppError(
    "Schedule to this real estate at this date and time already exists",
    409
    );
}

  const openingHour = 8;
  const closingHour = 18;
  const scheduleHour = parseInt(hour.split(":")[0]);
  if (scheduleHour < openingHour || scheduleHour >= closingHour) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  const weekday = new Date(date).getDay();
  if (weekday === 0 || weekday === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  const schedule = {
    date,
    hour,
    realEstateId:propertyId,
    userId:userId
  };

  const appointment: Schedule = scheduleRepository.create(schedule);

  await scheduleRepository.save(appointment);

  const newAppointment: tScheduleReturn =
    returnAppointmentSchema.parse(appointment);

  return newAppointment;
};
