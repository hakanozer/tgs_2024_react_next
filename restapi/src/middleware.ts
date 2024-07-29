import type { NextRequest } from 'next/server'
import { ApiUtil } from './app/utils/ApiUtil'

export function middleware(request: NextRequest) {
    const url = request.url
    const token = request.headers.get('token')
    const ip = request.headers.get("x-forwarded-for")
    console.log("middleware call", url, ip)
    return ApiUtil(401, 'Auth Fail', 'Plase Login')
}
