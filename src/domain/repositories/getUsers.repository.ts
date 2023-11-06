export class GetUsersRepository {
    private usersDataSource: any
    constructor(usersDataSource: any) {
        this.usersDataSource = usersDataSource
    }

    async execute() {
        return this.usersDataSource.find()
    }
}
