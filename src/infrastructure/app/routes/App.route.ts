import { Router } from 'express'
import UserRouter from './user/User.route'
import DocumentRouter from './document/Document.route'

const AppRouter = Router()

AppRouter.use('/api/v1/user', UserRouter)
AppRouter.use('/api/v1/document', DocumentRouter)

export default AppRouter
