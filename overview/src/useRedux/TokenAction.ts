import { UnknownAction } from "redux";
import { TokenType } from "./TokenType";

export interface TokenAction extends UnknownAction {
    type: TokenType,
    payload: string
}