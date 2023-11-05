//db memory mock
import {IDbAbstractRepository} from "./dbAbstractRepository";

let data = {
    users: [
        {
            id: '1',
            name: 'Bob'
        }
    ],
    tasks: [{id: '1', title: 'Finish the project'}]
}

export class MemoryDb implements IDbAbstractRepository{
    create(item: any): Promise<any> {
        return Promise.resolve(data.users.push(item));
    }

    get(id?: string): Promise<any> {
        return Promise.resolve(data.users);
    }

}
