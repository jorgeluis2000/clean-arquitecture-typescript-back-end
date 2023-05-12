import { v4 as uuid } from 'uuid'

import {
  type DocumentEntity,
  type DocumentProps
} from '@myapp-domain/entities/document/Document.entity'

export class DocumentValue implements DocumentEntity {
  id: string
  id_user: string
  title: string
  content: string
  constructor(newDocument: DocumentProps) {
    this.id = uuid()
    this.id_user = newDocument.id_user
    this.title = newDocument.title
    this.content = newDocument.content
  }
}
