import { UnknownAction } from "redux";
import { Todo } from "../models/ITodos";
import { TodoType } from "./TodoType";

export interface TodoAction extends UnknownAction {
    type: TodoType,
    payload: Todo
}