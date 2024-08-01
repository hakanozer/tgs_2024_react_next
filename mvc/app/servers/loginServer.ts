'use server'

import { prisma } from "../libs/db";
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export const loginAction = async (data: FormData) => {
    
    const email = data.get('email')
    const password = data.get('password')
    console.log(email, password)
    
    const user = await prisma.user.findUnique({
        where: {email: email?.toString(), password: password?.toString()}
      })
      if (user) {
        cookies().set('session', JSON.stringify(user), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // One week
            path: '/',
          })
        redirect('/admin') 
      }else {
        console.log("error login")
      }
        
  };

