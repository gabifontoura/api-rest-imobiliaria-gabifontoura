import { Router } from "express";
import {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
} from "../controllers/users.controllers";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middlewares";
import { ensureEmailIsUnique } from "../middlewares/ensureEmailIsUnique.middlewares";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin.middlewares";
import { ensurePermission } from "../middlewares/ensurePermission.middlewares";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middlewares";
import { ensureUserExists } from "../middlewares/ensureUserExists";
import { userSchema, usersUpdateSchema } from "../schemas/users.schemas";

const usersRoutes: Router = Router();

usersRoutes.post( "", ensureDataIsValid(userSchema), ensureEmailIsUnique, createUserController);
usersRoutes.get("", ensureTokenIsValid, ensureIsAdmin, listUsersController);
usersRoutes.delete( "/:id", ensureTokenIsValid,ensureUserExists, ensureIsAdmin, deleteUserController);
usersRoutes.patch( "/:id", ensureDataIsValid(usersUpdateSchema),  ensureEmailIsUnique,  ensureTokenIsValid, ensureUserExists, ensurePermission, updateUserController);
 
export default usersRoutes;
