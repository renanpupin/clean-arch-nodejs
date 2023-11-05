import express from 'express'

import {Router, Request, Response} from 'express'
import {GetUsersController} from '../adapters/getUsers.controller'
import {db} from './db'

const app = express()
const route = Router()

app.use(express.json())

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

app.use(route)

export const run = () => {
    app.listen(3000, () => 'server running on port 3000')
}
