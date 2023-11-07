import {UserEntity} from '@project/domain/entities/user.entity'
import {GenericRepositoryInterface} from './genericRepository.interface'

export abstract class UserRepository extends GenericRepositoryInterface {
    abstract create(record: UserEntity): Promise<UserEntity>

    abstract update(record: UserEntity): Promise<UserEntity>

    abstract get(id: string): Promise<UserEntity>

    abstract delete(id: string): Promise<boolean>

    abstract find(): Promise<UserEntity[]>
}
