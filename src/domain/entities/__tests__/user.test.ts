import { expect, test } from 'vitest'
import {UserEntity} from '../user.entity'


test('my types work properly', () => {
    const user = new UserEntity({id: '1', name: 'Bob'})
    expect(user.name).toBe('Bob')
})
