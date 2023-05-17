import { REST_PORT } from '@myapp-infrastructure/config/environments/Server.env'
import Server from '@myapp-infrastructure/config/server/Server'

const server = new Server(REST_PORT)
void server.start()
