export interface IUserJwt {
    id: number
    createdAt: string
    updatedAt: string
    email: string
    password: string
    name: string
    role: string
    iat: number
    exp: number
  }