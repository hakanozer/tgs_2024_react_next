import { Todo } from "../models/ITodos";
import { TodoAction } from "./TodoAction";
import { TodoType } from "./TodoType";

export const TodoReducer = ( state: Todo[] = [], action: TodoAction ) => {
    switch (action.type) {
        case TodoType.TODO_ADD:
            {
               //const newArr = Object.assign([], state) 
               //newArr.push(action.payload)
               return [...state, action.payload] 
            }
        case TodoType.TODO_REMOVE:
            {
                const newArr = [...state]
                const index = newArr.findIndex(item => item.id === action.payload.id)
                newArr.splice(index, 1)
                return newArr
            }

        case TodoType.TODO_ALL_REMOVE:
            return []
    
        default:
            return state
    }
}