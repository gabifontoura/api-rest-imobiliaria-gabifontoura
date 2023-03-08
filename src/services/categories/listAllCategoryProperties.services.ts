import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";

export const listAllCategoryPropertiesService = async (categoryId: number) => {
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

  const properties = await categoryRepository.findOne({
    where: {
      id: categoryId,
    },
    relations: {
      realEstate: true,
    },
  });

  return properties;
};


