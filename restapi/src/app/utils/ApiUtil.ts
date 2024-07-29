import { GlobalResponseType } from "./GlobalResponseType";

export const ApiUtil = ( status: number, message: string, result: any ): ResponseInit => {
    const sendObj: GlobalResponseType =  {
        ip: '211.12.21.21',
        message: message,
        result: result,
    }
    return Response.json(sendObj, {status: status})
}