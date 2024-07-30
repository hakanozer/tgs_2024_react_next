import { UserDto } from "@/app/dto/UserDto"
import { ApiUtil } from "@/app/utils/ApiUtil"
import { prisma } from "@/lib/prisma"
import { encrypt } from "@/lib/util"

export async function POST(_request: Request, _response: Response) {
    const user = await _request.json()
    try {
        user.password = encrypt(user.password)
        const dbUser = await prisma.user.create({
            data: user
        })
        return ApiUtil(200, "Success", dbUser)
        
    } catch (error: any) {
        return ApiUtil(400, error.message, user)
    }
}