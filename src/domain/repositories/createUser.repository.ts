import {CreateUserDto} from '../dtos/createUser.dto'
import {validate, validateOrReject} from 'class-validator'
import {UserEntity} from '../entities/user.entity'
import {extractErrorMessage} from '../../helpers/classValidator'
import {UserDataSourceRepositoryInterface} from '@project/adapters/interfaces/userDataSource.interface'

export class CreateUserRepository {
    private usersDataSource: any
    constructor(usersDataSource: UserDataSourceRepositoryInterface) {
        this.usersDataSource = usersDataSource
    }

    async validate(user: UserEntity): Promise<string | null> {
        const validationErrors = await validate(user)
        return extractErrorMessage(validationErrors)
    }

    async execute(userDto: CreateUserDto) {
        const newUser = new UserEntity(userDto)

        // await validateOrReject(newUser)

        const validationError = await this.validate(newUser)
        if (validationError) {
            throw new Error(validationError)
        }

        return this.usersDataSource.create(newUser)
    }
}
