import {UserEntity} from "../entities/user.entity";

export class CreateUserRepository {
    private db: any
    constructor(db: any) {
        this.db = db
    }

    async execute(user: any) {
        const newUser = new UserEntity(user)
        if(!newUser.isValid()){
            throw new Error('Invalid user.')
        }
        return this.db.users.create(user)
    }
}
