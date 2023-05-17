import {
  type DocumentEntity,
  type DocumentProps
} from '@myapp-domain/entities/document/Document.entity'
import { type DocumentRepository } from '@myapp-domain/repositories/Document.repository'
import { DocumentValue } from '@myapp-domain/values/document/Document.value'

export class DocumentUseCase {
  constructor(private readonly documntRepository: DocumentRepository) {}

  public async addADocument(
    newDocument: DocumentProps
  ): Promise<DocumentEntity | null> {
    const documentValue = new DocumentValue(newDocument)
    return await this.documntRepository.createADocument(documentValue)
  }
}
