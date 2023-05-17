import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
  {
    id: {
      type: String,
      unique: true
    },
    name: {
      type: String
    },
    nick: {
      type: String
    },
    password: {
      type: String
    }
  },
  {
    _id: false,
    timestamps: true
  }
)

const UserModel = model('users', UserSchema)

export default UserModel
