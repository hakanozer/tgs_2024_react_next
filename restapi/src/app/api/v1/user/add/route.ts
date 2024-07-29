import { ApiUtil } from "@/app/utils/ApiUtil"

export async function POST(_request: Request, _response: Response) {
    try {
        const object = await _request.json()
        return ApiUtil(200, 'Add Success', object)
    } catch (error) {
        return ApiUtil(400, 'Add Fail', null)
    }
}