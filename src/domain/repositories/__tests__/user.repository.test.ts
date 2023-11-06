import {expect, test} from 'vitest'
import {UserRepository} from '../user.repository'
import {UserEntity} from '../../entities/user.entity'
import {MemoryDb} from '../../../drivers/db/memoryDb'

test('test UserRepository', async () => {
    const usersDao = MemoryDb.users
    const userRepository = new UserRepository(usersDao)
    const user = new UserEntity({name: 'a'})
    const validationErrors = await userRepository.validate(user)
    expect(validationErrors).toBe('name must be longer than or equal to 2 characters')
})
