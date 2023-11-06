import {MinLength} from 'class-validator'

export class UserEntity {
    id: string | undefined

    @MinLength(2)
    name: string

    constructor(user: {id?: string; name: string}) {
        this.id = user.id
        this.name = user.name
    }
}
