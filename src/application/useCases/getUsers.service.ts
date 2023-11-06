import {UserDataSourceRepositoryInterface} from '@project/adapters/interfaces/userDataSource.interface'
import {UserRepository} from '../../domain/repositories/user.repository'

export class GetUsersService {
    private getUsersRepository: UserRepository
    constructor(usersDataSource: UserDataSourceRepositoryInterface) {
        this.getUsersRepository = new UserRepository(usersDataSource)
    }

    async execute() {
        return this.getUsersRepository.find()
    }
}
