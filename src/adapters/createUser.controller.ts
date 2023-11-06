import {logger} from '../drivers/logger'
import {CreateUserService} from '../application/useCases/createUser.service'
import {CreateUserDto} from "../domain/dtos/createUser.dto";

export class CreateUserController {
    private createUserService: CreateUserService
    constructor(usersDataSource: any) {
        this.createUserService = new CreateUserService(usersDataSource)
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
