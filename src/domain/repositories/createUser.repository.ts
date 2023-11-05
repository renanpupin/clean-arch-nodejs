import {User} from "../entities/user";

export class CreateUserRepository {
    private db: any
    constructor(db: any) {
        this.db = db
    }

    async execute(user: any) {
        const newUser = new User(user)
        if(!newUser.isValid()){
            throw new Error('Invalid user.')
        }
        return this.db.users.create(user)
    }
}
