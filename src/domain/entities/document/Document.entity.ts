export interface DocumentEntity {
  id: string
  id_user: string
  title: string
  content: string
}

export interface DocumentProps {
  id_user: string
  title: string
  content: string
}

export interface DocumetResponse {
  ok: boolean
  message: string
  data: DocumentEntity | null
}
