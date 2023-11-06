import {GetUsersRepository} from '../../domain/repositories/getUsers.repository'

export class GetUsersService {
    private getUsersRepository: any
    constructor(usersDataSource: any) {
        this.getUsersRepository = new GetUsersRepository(usersDataSource)
    }

    async execute() {
        return this.getUsersRepository.execute()
    }
}
