import {GetUsersRepository} from '../../domain/repositories/getUsers.repository'

export class GetUsersService {
    private userRepository: any
    constructor(db: any) {
        this.userRepository = new GetUsersRepository(db)
    }

    async execute() {
        return this.userRepository.execute()
    }
}
