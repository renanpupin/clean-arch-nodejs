import {CreateUserDto} from '../dtos/createUser.dto'
import {validate, validateOrReject} from 'class-validator'
import {UserEntity} from '../entities/user.entity'
import {extractErrorMessage} from '../../helpers/classValidator'
import {UserDaoInterface} from '@project/adapters/interfaces/userDao'

export class UserRepository implements UserDaoInterface {
    private userDao: UserDaoInterface
    constructor(userDao: UserDaoInterface) {
        this.userDao = userDao
    }

    update(record: UserEntity): Promise<UserEntity> {
        throw new Error('Method not implemented.')
    }
    get(id: string): Promise<UserEntity> {
        throw new Error('Method not implemented.')
    }
    delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented.')
    }

    async validate(user: UserEntity): Promise<string | null> {
        const validationErrors = await validate(user)
        return extractErrorMessage(validationErrors)
    }

    async find() {
        return this.userDao.find()
    }

    async create(userDto: CreateUserDto) {
        const newUser = new UserEntity(userDto)

        // await validateOrReject(newUser)

        const validationError = await this.validate(newUser)
        if (validationError) {
            throw new Error(validationError)
        }

        return this.userDao.create(newUser)
    }
}
