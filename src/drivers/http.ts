import express from 'express'
import {Router, Request, Response} from 'express'
import {GetUsersController} from '../adapters/getUsers.controller'
import {MemoryDb} from './db/memoryDb'
import {PrismaDb} from './db/prismaDb'
import {CreateUserController} from "../adapters/createUser.controller";
import {UserMemoryDataSourceRepository} from "../adapters/repositories/userMemoryDataSource.repository";
import {UserPrismaDataSourceRepository} from "../adapters/repositories/userPrismaDataSource.repository";


const app = express()
const route = Router()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

route.get('/', (req: Request, res: Response) => {
    res.json({message: 'hello world with Typescript'})
})

const usersDataSource = new UserMemoryDataSourceRepository(MemoryDb)
// const usersDataSource = new UserPrismaDataSourceRepository(PrismaDb)

route.get('/users', async (req: Request, res: Response) => {
    try {
        const getUsersController = new GetUsersController(usersDataSource)

        const users = await getUsersController.execute()

        res.json(users)
    } catch (error: any) {
        res.status(500).send({
            message: error?.message
        })
    }
})

route.post('/users', async (req: Request, res: Response) => {
    try {
        const createUserController = new CreateUserController(usersDataSource)

        const users = await createUserController.execute(req?.body?.user)
        return res.json(users)
    } catch (error: any) {
        return res.status(500).send({
            message: error?.message
        })
    }
})

app.use(route)

export const run = () => {
    app.listen(3000, () => 'server running on port 3000')
}
