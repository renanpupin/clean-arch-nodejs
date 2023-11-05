export class GetUsersRepository {
    private db: any
    constructor(db: any) {
        this.db = db
    }

    async execute() {
        return this.db.get()
    }
}
