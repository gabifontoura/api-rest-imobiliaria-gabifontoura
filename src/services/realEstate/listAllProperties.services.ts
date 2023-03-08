import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { tRealEstateReturn } from "../../interfaces/realEstate.interfaces";
import { returnFullRealEstate } from "../../schemas/realEstate.schemas";

export const listAllPropertiesService = async (): Promise<tRealEstateReturn[]> => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
  
    const findRealEstate = await realEstateRepository.find({
      relations: {
        address: true,
      },
    });

    const properties: RealEstate[] = await realEstateRepository.find();
  
    return properties;
  };