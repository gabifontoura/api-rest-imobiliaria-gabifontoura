import { z } from "zod";
import { addressSchema, returnAddressSchema } from "./addresses.schemas";
import { categorySchema } from "./categories.schemas";

export const realEstateSchema = z.object({
  value: z.string().or(z.number()),
  size: z.number().int().positive(),
  address: addressSchema,
  categoryId: z.number(),
});

export const returnRealEstateSchema = realEstateSchema.extend({
  id: z.number(),
  updatedAt: z.date().or(z.string()),
  createdAt: z.date().or(z.string()),
});

export const returnFullRealEstate = z.object({
  value: z.string().or(z.number()),
  size: z.number().int().positive(),
  address: returnAddressSchema,
  sold: z.boolean(),
  id: z.number(),
  updatedAt: z.date().or(z.string()),
  createdAt: z.date().or(z.string()),
});

export const realEstateReformSchema = realEstateSchema.omit({
  address: true,
  categoryId: true,
});

export const realEstateWithoutCategoryId = realEstateSchema
  .extend({
    category: categorySchema,
  })
  .omit({
    categoryId: true,
  });
