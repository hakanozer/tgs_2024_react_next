import { IPost } from "../models/IPost"
import { configApi } from "./api"

export const getPosts = async () => {
    return await configApi.get<IPost>('posts')
}