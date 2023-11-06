import {CreateUserDto} from '../dtos/createUser.dto'
import {UserEntity} from '../entities/user.entity'
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

    async find() {
        return this.userDao.find()
    }

    async create(userDto: CreateUserDto) {
        const newUser = await UserEntity.create(userDto)

        return this.userDao.create(newUser)
    }
}
