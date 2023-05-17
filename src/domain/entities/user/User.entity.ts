export interface UserEntity {
  id: string
  name: string
  nick: string
  password: string
}

export interface UserProps {
  name: string
  nick: string
  password: string
}

export interface UserResponse {
  ok: boolean
  message: string
  data: UserEntity | null
}
