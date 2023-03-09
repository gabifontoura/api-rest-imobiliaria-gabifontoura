import { tUser, tUserReturn } from '../../interfaces/users.interfaces'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { Repository } from 'typeorm'
import { returnUserSchema } from '../../schemas/users.schemas'

export const createUserService = async (userData: tUser): Promise<tUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User = userRepository.create(userData)

    await userRepository.save(user)
    
    const newUser:tUserReturn = returnUserSchema.parse(user)
    
    return newUser

}