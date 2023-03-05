import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tUsersReturn } from "../../interfaces/users.interfaces";
import { returnAllUsersSchema } from "../../schemas/users.schemas";

export const listUsersService = async (): Promise<tUsersReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers: Array<User> = await userRepository.find()

    const users = returnAllUsersSchema.parse(findUsers)

    return users

}
