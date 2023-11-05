import {CreateUserDto} from "../dtos/createUser.dto";
import {CreateUserFactory} from "../factories/createUser.factory";

export class CreateUserRepository {
    private db: any
    constructor(db: any) {
        this.db = db
    }

    validate (user: CreateUserDto)  {
        return !!user.name
    }

    async execute(user: CreateUserDto) {
        const newUserFactory = new CreateUserFactory()

        return this.db.create(newUserFactory.execute(user))
    }
}
