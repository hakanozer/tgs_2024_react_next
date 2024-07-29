import { IUser } from "@/app/models/IUser";
import { ApiUtil } from "@/app/utils/ApiUtil";
import { GlobalResponseType } from "@/app/utils/GlobalResponseType";
import type { NextApiRequest, NextApiResponse } from "next";


export async function POST(_request: Request) {
    const user = await _request.json() as IUser
    return ApiUtil(200, 'Login Success', user)
}


