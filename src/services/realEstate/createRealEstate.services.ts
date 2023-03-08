import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import {
  tFullRealEstateReturn,
  tPropertyRequest,
} from "../../interfaces/realEstate.interfaces";
import { returnRealEstateSchema } from "../../schemas/realEstate.schemas";

export const createRealEstateService = async (
  realEstateData: tPropertyRequest
): Promise<tFullRealEstateReturn> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const verifyAddress = await addressRepository.findOneBy({
    street: realEstateData.address.street,
    zipCode: realEstateData.address.zipCode,
    number: realEstateData.address.number!,
    city: realEstateData.address.city,
    state: realEstateData.address.state,
  });

  if (verifyAddress) {
    throw new AppError("Address already exists", 409);
  }

  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

  const findCategory = await categoryRepository.findOne({
      where: {
          id: realEstateData.categoryId
      }
  })

  if(!findCategory){
      throw new AppError('Category not found', 404)
  }

  const address = addressRepository.create(realEstateData.address);
  await addressRepository.save(address);

  const realEstate: RealEstate = realEstateRepository.create(realEstateData);
  
  realEstate.address = address;

  realEstate.category = findCategory;

  await realEstateRepository.save(realEstate);

  const newRealEstate = returnRealEstateSchema.parse(realEstate);
  
  return newRealEstate;
};
