import {expect, test} from 'vitest'
import {CreateUserRepository} from '../createUser.repository'
import {UserEntity} from '../../entities/user.entity'

test('test CreateUserRepository', async () => {
    const createUserRepository = new CreateUserRepository({create: (args: any) => args})
    const user = new UserEntity({name: 'a'})
    const validationErrors = await createUserRepository.validate(user)
    expect(validationErrors).toBe('name must be longer than or equal to 2 characters')
})
