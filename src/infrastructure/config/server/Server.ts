import express, {
  type NextFunction,
  type Express,
  type Response
} from 'express'
import cors from 'cors'
import { ServerConstant } from '@myapp-infrastructure/utils/constants/Server.constant'
import AppRouter from '@myapp-infrastructure/app/routes/App.route'
import connectionDB from '../database/connect.db'

export default class Server {
  private readonly _httpServer: Express
  private readonly _port: number
  private readonly _domain: string

  constructor(portServer: number, domainServer = 'localhost') {
    this._httpServer = express()
    this._port = portServer
    this._domain = domainServer
    void connectionDB()
    this.healthCheck()
    this.middlewares()
    this.routes()
    this.notFound()
  }

  private healthCheck(): void {
    this._httpServer.get('/', (_, res: Response) => {
      return res.status(200).json({
        ok: true,
        message: '🎆 ¡The service is working now! 🎆'
      })
    })
  }

  private routes(): void {
    this._httpServer.use(AppRouter)
  }

  private notFound(): void {
    this._httpServer.use('*', (_, res: Response) => {
      res.status(404).json({
        ok: false,
        message: 'Esta ruta no existe, dentro del servidor.'
      })
    })
  }

  private middlewares(): void {
    this._httpServer.use(cors())
    this._httpServer.use((_, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header(
        'Access-Control-Allow-Headers',
        'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
      )
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
      )
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
      next()
    })

    this._httpServer.use(express.json())
    this._httpServer.use(express.text())
    this._httpServer.use(express.urlencoded({ limit: '20mb', extended: true }))
  }

  public async start(): Promise<void> {
    this._httpServer.listen(this._port, () => {
      const httpsString =
        this._domain !== ServerConstant.domain
          ? `${this._domain}/`
          : `http://${ServerConstant.domain}:${this._port}`
      console.log('🚀 Start server listining on', httpsString, '🚀')
      console.log('\nClose the server using command Ctrl + C 👋')
    })
  }
}
