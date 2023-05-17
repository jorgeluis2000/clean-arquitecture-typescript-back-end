import AlternativeController from '@myapp-infrastructure/app/controllers/alternative/AlternativeController'
import { Router } from 'express'

const alternativeController = new AlternativeController()

const AlterRouter = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
AlterRouter.get('/geoip', alternativeController.myGeo)

export default AlterRouter
