import {UserDataSourceRepositoryInterface} from '@project/adapters/interfaces/userDataSource.interface'

export class GetUsersRepository {
    private usersDataSource: UserDataSourceRepositoryInterface
    constructor(usersDataSource: UserDataSourceRepositoryInterface) {
        this.usersDataSource = usersDataSource
    }

    async execute() {
        return this.usersDataSource.find()
    }
}
