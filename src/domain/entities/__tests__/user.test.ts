import { expect, test } from 'vitest'
import {User} from '../user'


test('my types work properly', () => {
    const user = new User({id: '1', name: 'Bob'})
    expect(user.isValid()).toBe(true)
})
