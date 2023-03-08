import { z } from "zod";
import { realEstateReformSchema, realEstateSchema, realEstateWithoutCategoryId, returnFullRealEstate, returnRealEstateSchema } from "../schemas/realEstate.schemas";

export type tRealEstateSchema = z.infer<typeof realEstateReformSchema>;
export type tReturnPropertySchema = z.infer<typeof returnRealEstateSchema>;
export type tRealEstateResponse = z.infer<typeof realEstateWithoutCategoryId>;
export type tRealEstateReturn = z.infer<typeof returnFullRealEstate>;
export type tProperty = z.infer<typeof realEstateSchema>;