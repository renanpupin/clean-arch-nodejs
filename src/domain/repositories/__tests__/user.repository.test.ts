import {expect, test} from 'vitest'
import {UserRepository} from '../user.repository'
import {MemoryDb} from '../../../drivers/db/memoryDb'

test('test UserRepository', async () => {
    const usersDao = MemoryDb.users
    const userRepository = new UserRepository(usersDao)
    expect(async () => await userRepository.create({name: 'a'})).rejects.toThrowError(
        'name must be longer than or equal to 2 characters'
    )
})
