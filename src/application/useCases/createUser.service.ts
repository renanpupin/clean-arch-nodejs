import {CreateUserDto} from '@project/domain/dtos/createUser.dto'
import {UserDataSourceRepositoryInterface} from '@project/adapters/interfaces/userDao'
import {UserRepository} from '../../domain/repositories/user.repository'

export class CreateUserService {
    private createUserRepository: UserRepository
    constructor(usersDataSource: UserDataSourceRepositoryInterface) {
        this.createUserRepository = new UserRepository(usersDataSource)
    }

    async execute(user: CreateUserDto) {
        if (!user) {
            throw new Error('User not provided.')
        }
        return this.createUserRepository.create(user)
    }
}
