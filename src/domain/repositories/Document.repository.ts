import { type DocumentEntity } from '@myapp-domain/entities/document/Document.entity'

export interface DocumentRepository {
  createADocument: (
    newDocument: DocumentEntity
  ) => Promise<DocumentEntity | null>
  findDocumentById: (
    idUser: string,
    idDocument: string
  ) => Promise<DocumentEntity | null>
  listDocuments: (
    idUser: string,
    limit: number,
    page: number
  ) => Promise<DocumentEntity[]>
  countDocuments: (idUser: string) => Promise<number>
  deleteDocument: (idUser: string, idDocument: string) => Promise<boolean>
}
