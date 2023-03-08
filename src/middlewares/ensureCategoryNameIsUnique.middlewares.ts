import { Request, Response, NextFunction} from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Category } from '../entities'
import { AppError } from '../errors'

export const ensureCategoryNameIsUnique = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const usersRepository: Repository<Category> = AppDataSource.getRepository(Category)

    if(req.body.name){
        const verifyCategoryName = await usersRepository.findOneBy({
            name: req.body.name
        })
       
        if(verifyCategoryName){
            throw new AppError("Category already exists", 409)
        }
    }

    return next()

}