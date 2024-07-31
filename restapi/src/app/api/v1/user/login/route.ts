import { UserDto } from "@/app/dto/UserDto";
import { IUser } from "@/app/models/IUser";
import { ApiUtil } from "@/app/utils/ApiUtil";
import { prisma } from "@/lib/prisma";
import { encryptJwt, loginJwt } from "@/lib/security";
import { decrypt, encrypt } from "@/lib/util";

export async function POST(_request: Request, _response: Response) {
    try {
        const user = await _request.json() as IUser
        const dbUser = await prisma.user.findUnique({
            where: {email: user.email}
        })
        if (dbUser) {
            const plainPassword = decrypt(dbUser.password)
            if (plainPassword === user.password) {
                const sendObj = await loginJwt(dbUser)
                return ApiUtil(200, 'Login Success', sendObj)
            }
        }
        return ApiUtil(400, 'Email or Password Fail', user)
        
    } catch (error) {
        return ApiUtil(400, 'Object Fail', null)
    }
}


