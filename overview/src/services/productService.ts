import { IProducts } from "../models/IProducts"
import { configApi } from "./api"


export const allProduct = () => {
    return configApi.get<IProducts>('products')
}