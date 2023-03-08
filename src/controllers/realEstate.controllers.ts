import { Request, Response } from "express";
import {
  tRealEstateReturn,
  tRealEstateSchema,
} from "../interfaces/realEstate.interfaces";
// import { createRealEstateService } from "../services/realEstate/createRealEstate.services";
import { listAllPropertiesService } from "../services/realEstate/listAllProperties.services";

// export const createRealEstateController = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const realEstateData = req.body;
//   const category = req.category;

//   const newEstate: tRealEstateSchema = await createRealEstateService(realEstateData,category);

//   return res.status(201).json(newEstate);
// };

export const listAllPropertiesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate: tRealEstateReturn[] = await listAllPropertiesService();

  return res.status(200).json(realEstate);
};
