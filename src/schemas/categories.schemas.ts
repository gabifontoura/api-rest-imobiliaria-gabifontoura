import { z } from "zod";
import { returnRealEstateSchema } from "./realEstate.schemas";

export const categorySchema = z.object({
    name: z.string(),
});

export const returnCategorySchema = categorySchema.extend({
    id: z.number().int(),
});

export const returnAllCategoriesSchema = returnCategorySchema.array()