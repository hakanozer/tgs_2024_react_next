import * as z from "zod";

export const LoginSchema = z.object({
    email: z
    .string()
    .min(5, 'Email min 5 karakter')
    .max(50, 'Email max 50 karakter')
    .email('Email format fail'),
    password: z
    .string()
    .min(5, 'Password min 5 karakter')
    .max(15, 'Password max 15 karakter'),
    remember: z
    .boolean()
})
 
 export type ILoginFormInput = z.infer<typeof LoginSchema>;