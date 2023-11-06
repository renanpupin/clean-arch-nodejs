import {UserEntity} from '@project/domain/entities/user.entity'
import {GenericEntityDaoInterface} from '@project/adapters/interfaces/genericEntityDao.interface'

export abstract class UserDaoInterface extends GenericEntityDaoInterface {
    abstract create(record: UserEntity): Promise<UserEntity>

    abstract update(record: UserEntity): Promise<UserEntity>

    abstract get(id: string): Promise<UserEntity>

    abstract delete(id: string): Promise<boolean>

    abstract find(): Promise<UserEntity[]>
}
