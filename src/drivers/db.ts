//db memory mock
let data = {
    users: [
        {
            id: '1',
            name: 'Bob'
        }
    ],
    tasks: [{id: '1', title: 'Finish the project'}]
}

export const db = {
    users: {
        get: () => {
            return data.users
        },
        create: (user: any) => {
            return data.users.push(user)
        }
    }
}
