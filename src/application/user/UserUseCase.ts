import {
  type UserEntity,
  type UserProps
} from '@myapp-domain/entities/user/User.entity'
import { type UserRepository } from '@myapp-domain/repositories/User.repository'
import { UserValue } from '@myapp-domain/values/user/User.value'

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async registerUser(newUser: UserProps): Promise<UserEntity | null> {
    const userValue = new UserValue(newUser)
    return await this.userRepository.registerUser(userValue)
  }

  public async findAUser(id: string): Promise<UserEntity | null> {
    return await this.userRepository.findUserById(id)
  }
}
