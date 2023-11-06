import {UserEntity} from '@project/domain/entities/user.entity'
import {GenericDataSourceRepositoryInterface} from '@project/adapters/interfaces/genericDataSource.interface'

export abstract class UserDataSourceRepositoryInterface extends GenericDataSourceRepositoryInterface {
    abstract create(record: UserEntity): Promise<UserEntity>

    abstract update(record: UserEntity): Promise<UserEntity>

    abstract get(id: string): Promise<UserEntity>

    abstract delete(id: string): Promise<boolean>

    abstract find(): Promise<UserEntity[]>
}
