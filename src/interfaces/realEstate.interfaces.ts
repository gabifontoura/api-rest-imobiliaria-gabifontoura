import { z } from "zod";
import { realEstateSchema,  returnAllRealEstateSchema,  returnRealEstateSchema } from "../schemas/realEstate.schemas";

export type tPropertyRequest = z.infer<typeof realEstateSchema>;

export type tFullRealEstateReturn = z.infer<typeof returnRealEstateSchema>;

export type tAllRealEstateReturn = z.infer<typeof returnAllRealEstateSchema>