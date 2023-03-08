import { Router } from "express";
import { createCategoryController, listAllCategoriesController, listAllCategoryPropertiesController } from "../controllers/categories.controllers";
import { ensureCategoryExists } from "../middlewares/ensureCategoryExists.middlewares";
import { ensureCategoryNameIsUnique } from "../middlewares/ensureCategoryNameIsUnique.middlewares";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middlewares";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin.middlewares";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middlewares";
import { categorySchema } from "../schemas/categories.schemas";

const categoriesRoutes: Router = Router();

categoriesRoutes.post( "", ensureTokenIsValid, ensureDataIsValid(categorySchema), ensureIsAdmin,ensureCategoryNameIsUnique,createCategoryController);
categoriesRoutes.get( "", listAllCategoriesController);
categoriesRoutes.get( "/:id/realEstate", ensureCategoryNameIsUnique, ensureCategoryExists, listAllCategoryPropertiesController);

export default categoriesRoutes;