import {logger} from '../../drivers/logger'
import {GetUsersService} from '../../application/useCases/getUsers.service'

export class GetUsersController {
    private getUsersService: GetUsersService
    constructor(usersDataSource: any) {
        this.getUsersService = new GetUsersService(usersDataSource)
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
