import { Router } from 'express'
import { createLoginController } from '../controllers/login.controllers'
import { ensureDataIsValid } from '../middlewares/ensureDataIsValid.middlewares'
import { createLoginSchema } from '../schemas/login.schemas'

const loginRoutes: Router = Router()

loginRoutes.post('', ensureDataIsValid(createLoginSchema), createLoginController)

export default loginRoutes