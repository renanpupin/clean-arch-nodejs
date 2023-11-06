import {logger} from '../../drivers/logger'
import {GetUsersService} from '../../application/useCases/getUsers.service'
import {UserDaoInterface} from '@project/adapters/interfaces/userDao'

export class GetUsersController {
    private getUsersService: GetUsersService
    constructor(userDao: UserDaoInterface) {
        this.getUsersService = new GetUsersService(userDao)
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
