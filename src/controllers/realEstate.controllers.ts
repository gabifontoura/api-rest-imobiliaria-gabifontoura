import { Request, Response } from "express";
import {
    tAllRealEstateReturn,
    tFullRealEstateReturn
} from "../interfaces/realEstate.interfaces";
import { createRealEstateService } from "../services/realEstate/createRealEstate.services";
import { listAllPropertiesService } from "../services/realEstate/listAllProperties.services";

export const createRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstateData = req.body;

  const newEstate: tFullRealEstateReturn = await createRealEstateService(realEstateData);

  return res.status(201).json(newEstate);
};

export const listAllPropertiesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate: tAllRealEstateReturn = await listAllPropertiesService();

  return res.status(200).json(realEstate);
};
