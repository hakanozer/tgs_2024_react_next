import { ApiUtil } from "@/app/utils/ApiUtil"

export const GET = async (
    _request: Request,
    { params }: { params: { id: string, catname: string } }
) => {
    const numNumber = Number(params.id)
    return  ApiUtil(200, "Name Get Params", {id: params.id, catname: params.catname} )
} 