import express from 'express'
import {Router, Request, Response} from 'express'
import {GetUsersController} from '../adapters/controllers/getUsers.controller'
import {MemoryDb} from './db/memoryDb'
import {PrismaDb} from './db/prismaDb'
import {CreateUserController} from '../adapters/controllers/createUser.controller'
import {UserMemoryDbDao} from '../adapters/daos/userMemoryDb.dao'
import {UserPrismaDao} from '../adapters/daos/userPrisma.dao'
import {HttpResponse} from '../adapters/presenters/httpResponse'

const app = express()
const route = Router()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

route.get('/', (req: Request, res: Response) => {
    res.json({message: 'hello world with Typescript'})
})

// const usersDao = new UserMemoryDbDao(MemoryDb)
const usersDao = new UserPrismaDao(PrismaDb)

route.get('/users', async (req: Request, res: Response) => {
    try {
        const getUsersController = new GetUsersController(usersDao)

        const users = await getUsersController.execute()

        return HttpResponse.success({res, data: {users}})
    } catch (error: any) {
        return HttpResponse.error({res, error})
    }
})

route.post('/users', async (req: Request, res: Response) => {
    try {
        const createUserController = new CreateUserController(usersDao)

        if (!req.body) {
            throw new Error('Request body not provided.')
        }

        const user = await createUserController.execute(req?.body?.user)
        return HttpResponse.success({res, data: {user}})
    } catch (error: any) {
        return HttpResponse.error({res, error})
    }
})

app.use(route)

export const run = () => {
    app.listen(3000, () => 'server running on port 3000')
}
