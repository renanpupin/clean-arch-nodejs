//db memory mock
let data = {
    users: [
        {
            id: '1',
            name: 'Bob'
        }
    ],
    tasks: [{id: '1', title: 'Finish the project', userId: '1'}]
}

type TableType = 'users' | 'tasks'

const MemoryDbFactory = () => {
    const create = (table: TableType, item: any): Promise<any> => {
        return Promise.resolve(data[table].push(item))
    }

    const update = (table: TableType, item: any): Promise<any> => {
        return Promise.resolve(
            data[table].map(record => {
                if (record.id === item.id) {
                    return record
                }
                return item
            })
        )
    }

    const get = (table: TableType, id: string): Promise<any> => {
        return Promise.resolve(data[table].find(record => record.id === id))
    }

    const find = (table: TableType): Promise<any> => {
        return Promise.resolve(data[table])
    }

    const remove = (table: TableType, id: string): Promise<any> => {
        return Promise.resolve(data[table].filter(record => record.id !== id))
    }

    return {
        users: {
            create: (item: any) => create('users', item),
            update: (item: any) => update('users', item),
            get: (id: string) => get('users', id),
            delete: (id: string) => remove('users', id),
            find: () => find('users')
        },
        tasks: {
            create: (item: any) => create('tasks', item),
            update: (item: any) => update('tasks', item),
            get: (id: string) => get('tasks', id),
            delete: (id: string) => remove('tasks', id),
            find: () => find('tasks')
        }
    }
}

export const MemoryDb = MemoryDbFactory()
