import { type Request, type Response } from 'express'
import geoip from 'geoip-lite'
import requestIp from 'request-ip'

export default class AlternativeController {
  async myGeo(req: Request, res: Response): Promise<Response> {
    const myIP = req.clientIp as string
    const normalIp = req.ip
    const clientIp = requestIp.getClientIp(req) as string
    const ifonIP = geoip.lookup(myIP)
    return res.status(200).json({
      ok: true,
      myIP: `My ip ${myIP}`,
      clientIp: `Client IP ${clientIp}`,
      normalIp,
      ifonIP
    })
  }
}
