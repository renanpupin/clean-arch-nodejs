import {expect, test} from 'vitest'
import {MemoryDb} from '../../../drivers/db/memoryDb'
import {CreateUserController} from '../../controllers/createUser.controller'
import {UserMemoryDbDao} from '../../daos/userMemoryDb.dao'

test('test GetUsersController', async () => {
    const usersDao = new UserMemoryDbDao(MemoryDb)

    const createUserController = new CreateUserController(usersDao)

    const user = await createUserController.execute({name: 'Alice'})

    expect(user.name).toEqual('Alice')
})
