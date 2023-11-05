import {logger} from '../drivers/logger'
import {GetUsersService} from '../application/useCases/getUsers.service'

export class GetUsersController {
    private getUsersService: any
    constructor(db: any) {
        this.getUsersService = new GetUsersService(db)
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
