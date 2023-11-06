import {UserDaoInterface} from '@project/adapters/interfaces/userDao'

export class UserMemoryDbDao implements UserDaoInterface {
    private db: any
    constructor(db: any) {
        this.db = db
    }
    create(user: any): Promise<any> {
        return this.db.users.create(user)
    }

    get(id: string): Promise<any> {
        return this.db.users.get({id})
    }

    find(): Promise<any> {
        return this.db.users.find()
    }

    delete(id: string): Promise<any> {
        return this.db.users.delete({id})
    }

    update(user: any): Promise<any> {
        return this.db.users.update(user)
    }
}
