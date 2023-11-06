import {logger} from '../../drivers/logger'
import {CreateUserService} from '../../application/useCases/createUser.service'
import {CreateUserDto} from '../../domain/dtos/createUser.dto'
import {UserDaoInterface} from '@project/adapters/interfaces/userDao'

export class CreateUserController {
    private createUserService: CreateUserService
    constructor(userDao: UserDaoInterface) {
        this.createUserService = new CreateUserService(userDao)
    }
    public execute = async (user: CreateUserDto) => {
        try {
            const createdUser = await this.createUserService.execute(user)
            logger.debug(createdUser)

            return createdUser
        } catch (error: any) {
            throw new Error(error?.message)
        }
    }
}
