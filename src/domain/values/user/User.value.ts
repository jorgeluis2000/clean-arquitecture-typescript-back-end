import { v4 as uuid } from 'uuid'

import {
  type UserProps,
  type UserEntity
} from '@myapp-domain/entities/user/User.entity'

export class UserValue implements UserEntity {
  id: string
  name: string
  nick: string
  password: string
  constructor(newUser: UserProps) {
    this.id = uuid()
    this.name = newUser.name
    this.nick = newUser.nick
    this.password = newUser.password
  }
}
