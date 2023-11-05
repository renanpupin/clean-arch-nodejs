export class UserEntity {
    private id: string | null
    private name: string
    
    constructor(user: {id?: string, name: string}) {
        this.id = user?.id ?? new Date().getTime()?.toString()
        this.name = user.name
    }

    isValid = () => {
        return !!this.id && !!this.name
    }
}
