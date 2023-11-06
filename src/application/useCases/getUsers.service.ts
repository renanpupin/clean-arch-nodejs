import {GetUsersRepository} from '../../domain/repositories/getUsers.repository'
import {UserDataSourceRepositoryInterface} from '@project/adapters/interfaces/userDataSource.interface'

export class GetUsersService {
    private getUsersRepository: any
    constructor(usersDataSource: UserDataSourceRepositoryInterface) {
        this.getUsersRepository = new GetUsersRepository(usersDataSource)
    }

    async execute() {
        return this.getUsersRepository.execute()
    }
}
