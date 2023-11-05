import express from 'express'

import {Router, Request, Response} from 'express'
import {GetUsersController} from '../adapters/getUsers.controller'
import {db} from './db'
import {CreateUserController} from "../adapters/createUser.controller";

const app = express()
const route = Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

route.get('/', (req: Request, res: Response) => {
    res.json({message: 'hello world with Typescript'})
})

route.get('/users', async (req: Request, res: Response) => {
    try {
        const getUsersController = new GetUsersController(db)

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
        const createUserController = new CreateUserController(db)

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
