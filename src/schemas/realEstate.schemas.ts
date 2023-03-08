import { z } from "zod";
import { addressSchema, returnAddressSchema } from "./addresses.schemas";
import {returnCategorySchema } from "./categories.schemas";

export const realEstateSchema = z.object({
  value: z.string().or(z.number()),
  size: z.number().int().positive(),
  address: addressSchema,
  categoryId: z.number(),
});

export const returnRealEstateSchema = realEstateSchema.omit({categoryId: true}).extend({
  id: z.number(),
  updatedAt: z.date().or(z.string()),
  createdAt: z.date().or(z.string()),
  category: returnCategorySchema,
  address: returnAddressSchema,
  sold: z.boolean().default(false)
});

export const returnRealEstateWithoutCategory = returnRealEstateSchema.omit({category: true})


export const returnAllRealEstateSchema = returnRealEstateWithoutCategory.array()

