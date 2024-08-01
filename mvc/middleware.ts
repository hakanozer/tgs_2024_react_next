'use server'
import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { IUser } from './app/models/IUser'
 
export function middleware (request: NextRequest) {
    console.log("call middle")
    const cookie = cookies().get('session')?.value
    if (cookie) {
    try {
        const user = JSON.parse(cookie) as IUser
        console.log("user", user)
      } catch (err) {
        console.log("this line middleware")
        // cookie delete
        
      }
    }

}