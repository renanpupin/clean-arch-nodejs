import {validate, validateOrReject} from 'class-validator'
import {UserEntity} from '../entities/user.entity'
import {CreateUserDto} from '../dtos/createUser.dto'
import {extractErrorMessage} from '../../helpers/classValidator'

export class CreateUserFactory {
    async validate(user: UserEntity): Promise<string | null> {
        const validationErrors = await validate(user)
        return extractErrorMessage(validationErrors)
    }

    async execute(userDto: CreateUserDto): Promise<UserEntity> {
        const newUser = new UserEntity(userDto)

        // await validateOrReject(newUser)

        const validationError = await this.validate(newUser)
        if (validationError) {
            throw new Error(validationError)
        }

        return newUser
    }
}
