import { expect, test } from 'vitest'
import {CreateUserFactory} from '../createUser.factory'
import {UserEntity} from "../../entities/user.entity";

test('test CreateUserFactory', async () => {
    const createUserFactory = new CreateUserFactory()
    const user = new UserEntity({name: 'a'})
    const validationErrors = await createUserFactory.validate(user)
    expect(validationErrors).toBe('name must be longer than or equal to 2 characters')
})
