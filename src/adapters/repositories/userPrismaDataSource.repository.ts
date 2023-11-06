import {UserDataSourceRepositoryInterface} from '@project/adapters/interfaces/userDataSource.interface'

export class UserPrismaDataSourceRepository implements UserDataSourceRepositoryInterface {
    private db: any
    constructor(db: any) {
        this.db = db
    }
    create(user: any): Promise<any> {
        return this.db.users.create({
            data: user
        })
    }

    get(id: string): Promise<any> {
        return this.db.users.findFirst({
            where: {
                id
            }
        })
    }

    find(): Promise<any> {
        return this.db.users
            .findMany
            // {
            //     where: {}
            // }
            ()
    }

    delete(id: string): Promise<any> {
        return this.db.users.delete({
            where: {id}
        })
    }

    update(user: any): Promise<any> {
        return this.db.users.update({
            where: {id: user.id},
            data: user
        })
    }
}
