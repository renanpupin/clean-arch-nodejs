import {UserRepository} from '../../domain/repositories/user.repository'

export class GetUsersService {
    private userRepository: UserRepository
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    async execute() {
        return this.userRepository.find()
    }
}
