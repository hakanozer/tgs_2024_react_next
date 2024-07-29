import { IUser } from "@/app/models/IUser";
import { GlobalResponseType } from "@/app/utils/GlobalResponseType";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<GlobalResponseType>
) {
    
    console.log("this line call")
    const user = req.body as IUser
    const sendObj: GlobalResponseType =  {
        status: true,
        message: "Global message",
        result: user
    }
    return res.json(sendObj)
    
}