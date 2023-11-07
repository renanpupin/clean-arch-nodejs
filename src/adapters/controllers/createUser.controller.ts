import {logger} from '../../drivers/logger'
import {CreateUserService} from '../../application/useCases/createUser.service'
import {CreateUserDto} from '../../domain/dtos/createUser.dto'
import {UserRepository} from '@project/domain/repositories/user.repository'

export class CreateUserController {
    private createUserService: CreateUserService
    constructor(userRepository: UserRepository) {
        this.createUserService = new CreateUserService(userRepository)
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
