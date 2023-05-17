import { DocumentUseCase } from '@myapp-application/document/DocumentUseCase'
import { DocumentController } from '@myapp-infrastructure/app/controllers/document/Document.controller'
import { MockDocumentRepository } from '@myapp-infrastructure/utils/repositories/document/MockDocument.repository'
import { Router } from 'express'

const DocumentRouter = Router()

const mockDocumentRepository = new MockDocumentRepository()

const documentUseCase = new DocumentUseCase(mockDocumentRepository)

const documentController = new DocumentController(documentUseCase)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
DocumentRouter.post('/add', documentController.addDocument)
DocumentRouter.delete('/delete/:id')
DocumentRouter.get('/get/:id')
DocumentRouter.get('/list/:idUser')

export default DocumentRouter
