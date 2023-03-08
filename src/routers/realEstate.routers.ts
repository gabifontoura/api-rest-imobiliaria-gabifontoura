import { Router } from "express";
import {  listAllPropertiesController } from "../controllers/realEstate.controllers";
import { ensureCategoryNameIsUnique } from "../middlewares/ensureCategoryNameIsUnique.middlewares";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middlewares";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin.middlewares";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middlewares";
import { realEstateSchema } from "../schemas/realEstate.schemas";

const realEstateRoutes: Router = Router();

// realEstateRoutes.post( "", ensureTokenIsValid, ensureIsAdmin, ensureDataIsValid(realEstateSchema), ensureCategoryNameIsUnique, createRealEstateController);
realEstateRoutes.get("", ensureIsAdmin, listAllPropertiesController);

export default realEstateRoutes;