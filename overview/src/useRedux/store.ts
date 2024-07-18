import { combineReducers, legacy_createStore } from "redux";
import { TodoReducer } from "./TodoReducer";
import { TokenReducer } from "./TokenReducer";

const combine = combineReducers({
    TodoReducer, TokenReducer
})

export type StateType = ReturnType<typeof combine>

export const store = legacy_createStore(combine)