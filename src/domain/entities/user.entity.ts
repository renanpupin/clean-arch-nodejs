import {MinLength} from 'class-validator'
import {extractErrorMessage} from '../../helpers/classValidator'
import {validate, validateOrReject} from 'class-validator'
import {CreateUserDto} from '../dtos/createUser.dto'

export class UserEntity {
    id: string | undefined

    @MinLength(2)
    name: string

    private constructor(user: {id?: string; name: string}) {
        this.id = user.id
        this.name = user.name
    }

    private static async validate(user: UserEntity): Promise<string | null> {
        const validationErrors = await validate(user)
        return extractErrorMessage(validationErrors)
    }

    static async create(user: CreateUserDto) {
        const newUser = new UserEntity(user)

        // await validateOrReject(newUser)

        const validationError = await this.validate(newUser)
        if (validationError) {
            throw new Error(validationError)
        }

        return newUser
    }
}
