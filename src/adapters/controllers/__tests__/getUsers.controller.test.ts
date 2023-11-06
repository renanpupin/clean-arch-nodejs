import {expect, test} from 'vitest'
import {MemoryDb} from '../../../drivers/db/memoryDb'
import {GetUsersController} from '../getUsers.controller'
import {UserMemoryDbDao} from '../../daos/userMemoryDb.dao'

test('test GetUsersController', async () => {
    const usersDao = new UserMemoryDbDao(MemoryDb)

    const getUsersController = new GetUsersController(usersDao)

    const users = await getUsersController.execute()
    expect(users).toEqual([
        {
            id: '1',
            name: 'Bob'
        }
    ])
})
