export class User {
    private id: string | null
    private name: string
    constructor(id: string | null = null, name: string) {
        this.id = id
        this.name = name
    }
}
