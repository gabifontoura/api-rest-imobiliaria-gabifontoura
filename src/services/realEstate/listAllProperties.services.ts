import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { tAllRealEstateReturn} from "../../interfaces/realEstate.interfaces";


export const listAllPropertiesService = async (): Promise<tAllRealEstateReturn> => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
  
    const findRealEstate: RealEstate[] = await realEstateRepository.find({
      relations: ["address"]
    })
  
    return findRealEstate;

  };

 