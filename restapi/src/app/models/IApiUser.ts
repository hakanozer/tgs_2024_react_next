export interface IApiUser {
    ip: string
    message: string
    result: Result
  }
  
  export interface Result {
    id: number
    createdAt: string
    updatedAt: string
    email: string
    password: string
    name: string
    role: string
  }