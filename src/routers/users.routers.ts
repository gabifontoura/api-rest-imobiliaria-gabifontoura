import { Router } from 'express'
import { createUserController, listUsersController, updateUserController, deleteUserController } from '../controllers/users.controllers'
import { ensureDataIsValid } from '../middlewares/ensureDataIsValid.middlewares'
import { ensureUserExists } from '../middlewares/ensureUserExists'
import { userSchema, usersUpdateSchema } from '../schemas/users.schemas'

const userRoutes: Router = Router()

userRoutes.post('', ensureDataIsValid(userSchema), createUserController)
userRoutes.get('', listUsersController)
userRoutes.delete('/:id', ensureUserExists, deleteUserController)
userRoutes.patch('/:id', ensureDataIsValid(usersUpdateSchema), ensureUserExists, updateUserController)

export default userRoutes