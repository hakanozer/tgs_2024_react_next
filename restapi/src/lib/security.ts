import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encryptJwt(payload: any) {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime(500)
      .sign(key);
  }
  
  export async function decryptJwt(input: string): Promise<any> {
    const jwtObj  = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return jwtObj;
  }

  export async function getSession() {
    const session = cookies().get("session")?.value;
    console.log("session", session)
    if (!session) return null;
    return await decryptJwt(session);
  }

  export async function loginJwt (user: any ) {

    const token = await encryptJwt(user);

      // Create the session
    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encryptJwt({ user, expires });

    // Save the session in a cookie
    cookies().set("session", session, { expires, httpOnly: true });
    const sendObj = {user, token: token}

    return sendObj

  }

  export async function logoutJwt() {
    cookies().set("session", '', {expires :new Date(0)});
  }