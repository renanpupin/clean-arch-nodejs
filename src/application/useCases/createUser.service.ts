import {CreateUserDto} from '@project/domain/dtos/createUser.dto'
import {UserRepository} from '../../domain/repositories/user.repository'
import {UserEntity} from '../../domain/entities/user.entity'

export class CreateUserService {
    private userRepository: UserRepository
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    async execute(user: CreateUserDto) {
        if (!user) {
            throw new Error('User not provided.')
        }

        const newUser = await UserEntity.create(user)

        return this.userRepository.create(newUser)
    }
}
