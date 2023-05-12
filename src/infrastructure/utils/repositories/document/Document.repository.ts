import { type DocumentEntity } from '@myapp-domain/entities/document/Document.entity'
import { type DocumentRepository as IDocumentRepository } from '@myapp-domain/repositories/Document.repository'

export class DocumentRepository implements IDocumentRepository {
  public async createADocument(
    newDocument: DocumentEntity
  ): Promise<DocumentEntity | null> {
    throw new Error('Method not implemend')
  }

  public async findDocumentById(
    idUser: string,
    idDocument: string
  ): Promise<DocumentEntity | null> {
    throw new Error('Method not implemend')
  }

  public async listDocuments(
    idUser: string,
    limit: number,
    page: number
  ): Promise<DocumentEntity[]> {
    throw new Error('Method not implemend')
  }

  public async countDocuments(idUser: string): Promise<number> {
    throw new Error('Method not implemend')
  }

  public async deleteDocument(
    idUser: string,
    idDocument: string
  ): Promise<boolean> {
    throw new Error('Method not implemend')
  }
}
