import { ICustomer } from "../models/ICustomer"
import { configApi } from "./api"

export const customerLogin = (username: string, password: string ) => {
    const sendObj = {
        username: username,
        password: password
    }
    return configApi.post<ICustomer>('auth/login', sendObj)
}