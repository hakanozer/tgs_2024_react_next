import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { IUser } from './models/IUser'
 
export function middleware(request: NextRequest) {
    const cookie = cookies().get('session')?.value
    if (cookie) {
    try {
        const user = JSON.parse(cookie) as IUser
        console.log("user", user)
      } catch (err) {
        console.log("this line middleware")
        // cookie delete
        cookies().delete('session')
        
      }
    }

}