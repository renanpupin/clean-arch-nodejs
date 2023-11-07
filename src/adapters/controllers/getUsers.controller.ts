import {logger} from '../../drivers/logger'
import {GetUsersService} from '../../application/useCases/getUsers.service'
import {UserRepository} from '@project/domain/repositories/user.repository'

export class GetUsersController {
    private getUsersService: GetUsersService
    constructor(userRepository: UserRepository) {
        this.getUsersService = new GetUsersService(userRepository)
    }
    public execute = async () => {
        try {
            const users = await this.getUsersService.execute()
            logger.debug(users)

            return users
        } catch (error: any) {
            throw new Error(error?.message)
        }
    }
}
