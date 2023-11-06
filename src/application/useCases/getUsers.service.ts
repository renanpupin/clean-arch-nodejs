import {UserDaoInterface} from '@project/adapters/interfaces/userDao'
import {UserRepository} from '../../domain/repositories/user.repository'

export class GetUsersService {
    private getUsersRepository: UserRepository
    constructor(userDao: UserDaoInterface) {
        this.getUsersRepository = new UserRepository(userDao)
    }

    async execute() {
        return this.getUsersRepository.find()
    }
}
