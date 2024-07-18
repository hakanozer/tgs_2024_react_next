import { ITodos, Todo } from "../models/ITodos"
import { configApi } from "./api"

export const allTodos = () => {
    return configApi.get<ITodos>('todos')
}

export const addTodo = (todo: Todo) => {
    return  configApi.post<Todo>('todos/add', todo)
}