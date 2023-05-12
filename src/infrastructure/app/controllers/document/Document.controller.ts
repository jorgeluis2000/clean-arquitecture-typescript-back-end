import { type Request, type Response } from 'express'
import { type DocumetResponse } from '@myapp-domain/entities/document/Document.entity'
import { type DocumentUseCase } from '@myapp-application/document/DocumentUseCase'

export class DocumentController {
  constructor(private readonly documentUseCase: DocumentUseCase) {}

  public async addDocument(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    const { body } = req
    try {
      const documentFind = await this.documentUseCase.addADocument(body)
      const response: DocumetResponse = {
        ok: true,
        message: 'Found it!!',
        data: documentFind
      }
      return res.status(200).json(response)
    } catch (error) {
      const response: DocumetResponse = {
        ok: true,
        message: 'Didnt find it!!',
        data: null
      }
      return res.status(200).json(response)
    }
  }
}
