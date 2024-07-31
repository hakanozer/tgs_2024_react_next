import type { NextRequest } from 'next/server'
import { ApiUtil } from './app/utils/ApiUtil'
import { decryptJwt, getSession, logoutJwt } from './lib/security'

export async function middleware (request: NextRequest) {

    
    const freeUrls = ["/api/v1/user/", "/api-doc", "/"]
    const url = request.nextUrl.pathname

    let loginStatus = true
    freeUrls.forEach( urlItem => { 
        if (url.includes(urlItem)) {
            loginStatus = false
        }
     });

     if (loginStatus === true) {
        const token = request.headers.get('Authorization')
        if (token === null) {
            return ApiUtil(401, 'Auth Fail', 'Plase Login')
        }else {
            const jwtArr = token.split(" ")
            try {

                const jwt = jwtArr[1]
                try {
                    const jwtObj = await decryptJwt(jwt)
                    console.log("role",jwtObj.payload.role)
                    //return ApiUtil(401, 'Auth Success', 'Success')
                } catch (error:any) {
                    const role = error.payload.role
                    if ( role === "PRODUCT" && url.includes(role.toLowercase())) {

                    }else {
                        return ApiUtil(403, 'Role Fail', 'Fail')
                    }
                }
            } catch (error) {
                //logoutJwt()
                //return ApiUtil(401, 'Auth Fail', 'Plase Login')
            }
        }
     }
     
}
