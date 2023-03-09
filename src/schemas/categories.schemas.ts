import { z } from "zod";

export const categorySchema = z.object({
    name: z.string(),
});

export const returnCategorySchema = categorySchema.extend({
    id: z.number().int(),
});

export const returnAllCategoriesSchema = returnCategorySchema.array()