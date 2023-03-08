import { z } from "zod";
import { realEstateSchema, returnRealEstateSchema, } from "../schemas/realEstate.schemas";

export type tPropertyRequest = z.infer<typeof realEstateSchema>;

export type tFullRealEstateReturn = z.infer<typeof returnRealEstateSchema>;