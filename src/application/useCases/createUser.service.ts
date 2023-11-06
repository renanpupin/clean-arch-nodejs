import {CreateUserRepository} from '../../domain/repositories/createUser.repository'
import {CreateUserDto} from '@project/domain/dtos/createUser.dto'

export class CreateUserService {
    private createUserRepository: any
    constructor(usersDataSource: any) {
        this.createUserRepository = new CreateUserRepository(usersDataSource)
    }

    async execute(user: CreateUserDto) {
        if (!user) {
            throw new Error('User not provided.')
        }
        return this.createUserRepository.execute(user)
    }
}
