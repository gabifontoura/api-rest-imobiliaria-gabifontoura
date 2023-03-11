import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { tCategory, tCategoryReturn } from "../../interfaces/categories.interfaces";
import { returnCategorySchema } from "../../schemas/categories.schemas";

export const createCategoryService = async (categoryData: tCategory): Promise<tCategoryReturn> =>  {
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

  const categories: Category = categoryRepository.create(categoryData);

  await categoryRepository.save(categories);

  const newCategory: tCategoryReturn = returnCategorySchema.parse(categories);

  return newCategory;
};


