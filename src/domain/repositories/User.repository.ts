import { type UserEntity } from '@myapp-domain/entities/user/User.entity'

export interface UserRepository {
  registerUser: (newUser: UserEntity) => Promise<UserEntity | null>
  findUserById: (id: string) => Promise<UserEntity | null>
}
