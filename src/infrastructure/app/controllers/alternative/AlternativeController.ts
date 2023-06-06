import { type Request, type Response } from 'express'
import geoip from 'geoip-lite'
import requestIp from 'request-ip'

export default class AlternativeController {
  async myGeo(req: Request, res: Response): Promise<Response> {
    const device_clinet = req.headers['user-agent']
    const clientIp = requestIp.getClientIp(req) as string
    const infoIp = geoip.lookup(clientIp)
    const result = {}
    return res.status(200).json({
      ok: true,
      clientIp: `Client IP ${clientIp}`,
      device_clinet,
      infoIp
    })
  }
}
