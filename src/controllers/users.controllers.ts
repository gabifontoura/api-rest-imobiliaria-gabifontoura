import { Request, Response } from "express";
import { tAllUsersReturn, tUser, tUserReturn, tUserUpdate } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.services";
import { deleteUserService } from "../services/users/deleteUser.services";
import { listUsersService } from "../services/users/readAllUsers.services";
import { updateUserService } from "../services/users/updateUser.services";

export const createUserController = async (req: Request, res: Response) => {
  const userData: tUser = req.body;

  const newUser: tUserReturn = await createUserService(userData);

  return res.status(201).json(newUser);
};

export const listUsersController = async (req: Request, res: Response) => {
  const users: tAllUsersReturn = await listUsersService();

  return res.json(users);
};

export const updateUserController = async (req: Request, res: Response) => {
  const userData: tUserUpdate = req.body;
  const userId: number = parseInt(req.params.id);

  const updatedUser: tUserUpdate = await updateUserService(userData, userId);

  return res.json(updatedUser);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);

  await deleteUserService(userId);

  return res.status(204).send();
};
