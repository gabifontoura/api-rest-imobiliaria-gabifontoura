import { Request, Response } from "express";
import { tUser, tUserUpdate } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.services";
import { deleteUserService } from "../services/users/deleteUser.services";
import { listUsersService } from "../services/users/readAllUsers.services";
import { updateUserService } from "../services/users/updateUser.services";

export const createUserController = async (req: Request, res: Response) => {
  const userData: tUser = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

export const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.json(users);
};

export const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(parseInt(req.params.id));

  return res.status(204).send();
};

export const updateUserController = async (req: Request, res: Response) => {
  const userData: tUserUpdate = req.body;
  const idUser = parseInt(req.params.id);

  const updatedUser = await updateUserService(userData, idUser);

  return res.json(updatedUser);
};
