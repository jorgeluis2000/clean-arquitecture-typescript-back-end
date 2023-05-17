import { Router } from 'express'

const UserRouter = Router()

UserRouter.post('/auth')
UserRouter.post('/register')
UserRouter.post('/update-info')
UserRouter.post('/update-password')

export default UserRouter
