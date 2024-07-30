import { IApiUser } from "../models/IApiUser"
import { configApi } from "./api"

export const userLogin = (email: string, password: string) => {
    const sendObj = {
        email: email,
        password: password
    }
    return configApi.post<IApiUser>('user/login', sendObj)
}