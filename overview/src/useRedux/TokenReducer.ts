import { TokenAction } from "./TokenAction";
import { TokenType } from "./TokenType";

export const TokenReducer = ( state: string = '', action: TokenAction ) => {
    switch (action.type) {
        case TokenType.TOKEN_VALUE:
            return action.payload
    
        default:
           return state
    }
} 