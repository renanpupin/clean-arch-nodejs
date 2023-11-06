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

type NamespaceType = 'users' | 'tasks'

const MemoryDbFactory = () => {
    const create = (namespace: NamespaceType, item: any): Promise<any> => {
        return Promise.resolve(data[namespace].push(item));
    }

    const update = (namespace: NamespaceType, item: any): Promise<any> => {
        return Promise.resolve(data[namespace].map(record => {
            if(record.id === item.id){
                return record
            }
            return item
        }));
    }

    const get = (namespace: NamespaceType, id: string): Promise<any>  =>{
        return Promise.resolve(data[namespace].find(record => record.id === id));
    }

    const find = (namespace: NamespaceType): Promise<any> =>  {
        return Promise.resolve(data[namespace]);
    }

    const remove = (namespace: NamespaceType, id: string): Promise<any> =>  {
        return Promise.resolve(data[namespace].filter(record => record.id !== id));
    }

    return {
        users: {
            create: (item: any) => create('users', item),
            update: (item: any) => update('users', item),
            get: (id: string) => get('users', id),
            delete: (id: string) => remove('users', id),
            find: () => find('users'),
        },
        tasks: {
            create: (item: any) => create('tasks', item),
            update: (item: any) => update('tasks', item),
            get: (id: string) => get('tasks', id),
            delete: (id: string) => remove('tasks', id),
            find: () => find('tasks'),
        }
    }
}

export const MemoryDb = MemoryDbFactory()
