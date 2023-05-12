import { type DocumentEntity } from '@myapp-domain/entities/document/Document.entity'
import { type DocumentRepository as IDocumentRepository } from '@myapp-domain/repositories/Document.repository'
import DocumentModel from '@myapp-infrastructure/app/models/Document.model'

export class MockDocumentRepository implements IDocumentRepository {
  public async createADocument(
    newDocument: DocumentEntity
  ): Promise<DocumentEntity | null> {
    const document = (await DocumentModel.create(
      newDocument
    )) as DocumentEntity | null
    return document
  }

  public async findDocumentById(
    idUser: string,
    idDocument: string
  ): Promise<DocumentEntity | null> {
    return DocumentModel.find({
      id_user: idUser,
      id: idDocument
    }) as unknown as DocumentEntity | null
  }

  public async listDocuments(
    idUser: string,
    limit: number,
    page: number
  ): Promise<DocumentEntity[]> {
    throw new Error('Not implement function')
  }

  public async countDocuments(idUser: string): Promise<number> {
    return 0
  }

  public async deleteDocument(
    idUser: string,
    idDocument: string
  ): Promise<boolean> {
    return false
  }
}
