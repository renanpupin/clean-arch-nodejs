import {logger} from '../drivers/logger'
import {CreateUserService} from '../application/useCases/createUser.service'

export class CreateUserController {
    private createUserService: any
    constructor(db: any) {
        this.createUserService = new CreateUserService(db)
    }
    public execute = async (user: any) => {
        try {
            const createdUser = await this.createUserService.execute(user)
            logger.debug(createdUser)

            return createdUser
        } catch (error: any) {
            throw new Error(error?.message)
        }
    }
}
