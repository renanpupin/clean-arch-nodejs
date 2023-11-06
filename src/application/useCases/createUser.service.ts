import {CreateUserDto} from '@project/domain/dtos/createUser.dto'
import {UserDaoInterface} from '@project/adapters/interfaces/userDao'
import {UserRepository} from '../../domain/repositories/user.repository'

export class CreateUserService {
    private createUserRepository: UserRepository
    constructor(userDao: UserDaoInterface) {
        this.createUserRepository = new UserRepository(userDao)
    }

    async execute(user: CreateUserDto) {
        if (!user) {
            throw new Error('User not provided.')
        }

        return this.createUserRepository.create(user)
    }
}
