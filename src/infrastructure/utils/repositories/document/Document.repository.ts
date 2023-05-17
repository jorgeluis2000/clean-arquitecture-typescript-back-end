import { type DocumentEntity } from '@myapp-domain/entities/document/Document.entity'
import { type DocumentRepository as IDocumentRepository } from '@myapp-domain/repositories/Document.repository'

export class DocumentRepository implements IDocumentRepository {
  public async createADocument(
    _newDocument: DocumentEntity
  ): Promise<DocumentEntity | null> {
    throw new Error('Method not implemend')
  }

  public async findDocumentById(
    _idUser: string,
    _idDocument: string
  ): Promise<DocumentEntity | null> {
    throw new Error('Method not implemend')
  }

  public async listDocuments(
    _idUser: string,
    _limit: number,
    _page: number
  ): Promise<DocumentEntity[]> {
    throw new Error('Method not implemend')
  }

  public async countDocuments(_idUser: string): Promise<number> {
    throw new Error('Method not implemend')
  }

  public async deleteDocument(
    _idUser: string,
    _idDocument: string
  ): Promise<boolean> {
    throw new Error('Method not implemend')
  }
}
