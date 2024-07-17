import { IProducts, Product } from "../models/IProducts"
import { configApi } from "./api"


export const allProduct = () => {
    return configApi.get<IProducts>('products')
}

export const singleProduct = (id: string) => {
    return configApi.get<Product>('products/'+id)
}