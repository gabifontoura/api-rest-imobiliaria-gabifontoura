import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";

export const listAllCategoryPropertiesService = async (categoryId: number) => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategory = await categoryRepository.findOne({
    where: {
      id: categoryId,
    },
  });

  if (!findCategory) {
    throw new AppError("Category not found", 404);
  }
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
