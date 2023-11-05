import {UserEntity} from "../entities/user.entity";
import {CreateUserDto} from "../dtos/createUser.dto";

export class CreateUserRepository {
    private db: any
    constructor(db: any) {
        this.db = db
    }

    validate (user: CreateUserDto)  {
        return !!user.name
    }

    async execute(user: CreateUserDto) {
        const newUser = new UserEntity(user)

        if(!this.validate(user)){
            throw new Error('Invalid user.')
        }

        return this.db.create(newUser)
    }
}
