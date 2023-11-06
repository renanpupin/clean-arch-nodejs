import {CreateUserDto} from '../dtos/createUser.dto'
import {CreateUserFactory} from '../factories/createUser.factory'

export class CreateUserRepository {
    private usersDataSource: any
    constructor(usersDataSource: any) {
        this.usersDataSource = usersDataSource
    }

    async execute(user: CreateUserDto) {
        const newUserFactory = new CreateUserFactory()

        return this.usersDataSource.create(await newUserFactory.execute(user))
    }
}
