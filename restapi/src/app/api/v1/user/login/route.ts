import { IUser } from "@/app/models/IUser";
import { ApiUtil } from "@/app/utils/ApiUtil";

export async function POST(_request: Request, _response: Response) {
    try {
        const user = await _request.json() as IUser
        return ApiUtil(200, 'Login Success', user)
    } catch (error) {
        return ApiUtil(400, 'Object Fail', null)
    }
}


