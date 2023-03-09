import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule } from "../../entities";
import { AppError } from "../../errors";

export const listPropertyScheduleService = async (realEstateId: number): Promise<RealEstate> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
  
    const realEstate = await realEstateRepository.findOne({
      where: {
        id: realEstateId,
      },
      relations:{
        schedules: {user: true},
        address:true,
        category:true
      }

    });

    if (!realEstate) {
      throw new AppError("RealEstate not found", 404);
      
    }

    return realEstate

}