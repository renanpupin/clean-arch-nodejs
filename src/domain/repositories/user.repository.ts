import {CreateUserDto} from '../dtos/createUser.dto'
import {UpdateUserDto} from '../dtos/updateUser.dto'
import {UserEntity} from '../entities/user.entity'
import {UserDaoInterface} from '@project/adapters/interfaces/userDao'

export class UserRepository implements UserDaoInterface {
    private userDao: UserDaoInterface
    constructor(userDao: UserDaoInterface) {
        this.userDao = userDao
    }

    async update(record: UpdateUserDto): Promise<UserEntity> {
        const updatedUserEntity = await UserEntity.create(record)
        return this.userDao.update(updatedUserEntity)
    }
    get(id: string): Promise<UserEntity> {
        return this.userDao.get(id)
    }
    delete(id: string): Promise<boolean> {
        return this.userDao.delete(id)
    }

    async find() {
        return this.userDao.find()
    }

    async create(userDto: CreateUserDto) {
        const newUser = await UserEntity.create(userDto)

        return this.userDao.create(newUser)
    }
}
