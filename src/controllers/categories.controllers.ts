import { Request, Response } from "express";
import { tAllCategoriesReturn, tCategory, tCategoryReturn } from "../interfaces/categories.interfaces";
import { createCategoryService } from "../services/categories/createCategory.services";
import { listAllCategoriesService } from "../services/categories/listAllCategories.services";
import { listAllCategoryPropertiesService } from "../services/categories/listAllCategoryProperties.services";

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
    
  const categoryData: tCategory = req.body;

  const newCategory: tCategoryReturn = await createCategoryService(categoryData);

  return res.status(201).json(newCategory);
};

export const listAllCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {

  const categories: tAllCategoriesReturn = await listAllCategoriesService();

  return res.status(200).json(categories);
};

export const listAllCategoryPropertiesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryId: number = parseInt(req.params.id);

  const properties = await listAllCategoryPropertiesService(categoryId);

  return res.status(200).json(properties);
};