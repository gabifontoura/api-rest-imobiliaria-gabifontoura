import { Router } from 'express'
import { createUserController, listUsersController, updateUserController, deleteUserController } from '../controllers/users.controllers'
import { ensureDataIsValid } from '../middlewares/ensureDataIsValid.middlewares'
import { ensureEmailIsUnique } from '../middlewares/ensureEmailIsUnique.middlewares'
import { ensureIsAdmin } from '../middlewares/ensureIsAdmin.middlewares'
import { ensurePermission } from '../middlewares/ensurePermission.middlewares'
import { ensureTokenIsValid } from '../middlewares/ensureTokenIsValid.middlewares'
import { ensureUserExists } from '../middlewares/ensureUserExists'
import { userSchema, usersUpdateSchema } from '../schemas/users.schemas'

const userRoutes: Router = Router()

userRoutes.post('', ensureDataIsValid(userSchema), ensureEmailIsUnique, createUserController)
userRoutes.get('', ensureTokenIsValid, ensureIsAdmin, listUsersController)
userRoutes.delete('/:id', ensureTokenIsValid, ensureIsAdmin, ensureUserExists, deleteUserController)
userRoutes.patch('/:id', ensureDataIsValid(usersUpdateSchema), ensureTokenIsValid, ensureUserExists, ensurePermission, updateUserController)

export default userRoutes