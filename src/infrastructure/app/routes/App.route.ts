import { Router } from 'express'
import UserRouter from './user/User.route'
import DocumentRouter from './document/Document.route'
import AlterRouter from './alternative/Alternative.route'

const AppRouter = Router()

AppRouter.use('/api/v1/user', UserRouter)
AppRouter.use('/api/v1/document', DocumentRouter)
AppRouter.use('/api/v1/alter', AlterRouter)

export default AppRouter
