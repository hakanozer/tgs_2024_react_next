import { ApiUtil } from "@/app/utils/ApiUtil"

export const GET = async (
    _request: Request,
    { params }: { params: { id: string } }
) => {
    const numNumber = Number(params.id)
    return  ApiUtil(200, "Get Params", numNumber )
} 