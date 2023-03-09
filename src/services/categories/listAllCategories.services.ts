import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { tAllCategoriesReturn } from "../../interfaces/categories.interfaces";

export const listAllCategoriesService = async (): Promise<tAllCategoriesReturn> => {
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

  const categories: Category[] = await categoryRepository.find();

  return categories;
};

