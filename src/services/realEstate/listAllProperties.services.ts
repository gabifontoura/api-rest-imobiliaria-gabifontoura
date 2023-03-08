import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { tFullRealEstateReturn } from "../../interfaces/realEstate.interfaces";


export const listAllPropertiesService = async (): Promise<tFullRealEstateReturn[]> => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
  
    const realEstate = await realEstateRepository.find({
      relations: {
        address: true,
      },
    });

    const properties: tFullRealEstateReturn[] = await realEstateRepository.find();
  
    return properties;
  };