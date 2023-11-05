import { MinLength, Min} from 'class-validator';

export class UserEntity {
    id: string | null

    @MinLength(2)
    name: string

    constructor(user: {id?: string, name: string}) {
        this.id = user?.id ?? new Date().getTime()?.toString()
        this.name = user.name
    }
}
