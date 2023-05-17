import { type Request, type Response } from 'express'
import geoip from 'geoip-lite'

export default class AlternativeController {
  async myGeo(req: Request, res: Response): Promise<Response> {
    const myIP = req.ip
    const ifonIP = geoip.lookup(myIP)
    return res.status(200).json({
      ok: true,
      myIP,
      ifonIP
    })
  }
}
