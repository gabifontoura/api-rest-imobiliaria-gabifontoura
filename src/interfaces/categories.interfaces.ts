import { z } from "zod";
import { categorySchema, returnAllCategoriesSchema, returnCategorySchema } from "../schemas/categories.schemas";

export type tCategory = z.infer<typeof categorySchema>;
export type tCategoryReturn = z.infer<typeof returnCategorySchema>;
export type tAllCategoriesReturn = z.infer<typeof returnAllCategoriesSchema>