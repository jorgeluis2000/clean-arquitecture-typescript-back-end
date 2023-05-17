import { Schema, model } from 'mongoose'

const DocumentSchema = new Schema(
  {
    id: {
      type: String,
      unique: true
    },
    id_user: {
      type: String
    },
    title: {
      type: String
    },
    content: {
      type: String
    }
  },
  {
    _id: false,
    timestamps: true
  }
)

const DocumentModel = model('documents', DocumentSchema)

export default DocumentModel
