import {GetUsersRepository} from '../../domain/repositories/getUsers.repository'

export class GetUsersService {
    private getUsersRepository: any
    constructor(db: any) {
        this.getUsersRepository = new GetUsersRepository(db)
    }

    async execute() {
        return this.getUsersRepository.execute()
    }
}
