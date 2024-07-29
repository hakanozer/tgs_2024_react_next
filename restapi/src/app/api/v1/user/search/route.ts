import { ApiUtil } from "@/app/utils/ApiUtil"
import { type NextRequest } from 'next/server'

export const GET = async (
    request: NextRequest
) => {
    const params = request.nextUrl.searchParams
    return ApiUtil(200, "Name Get Params", params.get('id') )
}