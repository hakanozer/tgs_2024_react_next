'use client'
import { useForm } from "react-hook-form";
import { ILoginFormInput, LoginSchema } from "./formSchemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { prisma } from "./libs/db";
import { useState } from "react";
import { loginAction } from "./servers/loginServer";
export default function Login() {

  const [loginError, setloginError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>({
    resolver: zodResolver(LoginSchema),
  });

  const loginForm = async (data: ILoginFormInput) => {
    //console.log(data)
    /*
    const user = await prisma.user.findUnique({
      where: {email: data.email, password: data.password}
    })
    if (user) {
      console.log(user)
    }else {
      setloginError('Email or Password Fail')
    }
    */
  }


  return (
    <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-4">
        <h2>User Login</h2>
        {loginError !== '' &&
          <div>{loginError}</div>
        }
        <form action={loginAction}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input {...register('email') } name="email" type="email" className="form-control" id="email" />
            {errors.email?.message &&
              <div>{errors.email.message}</div>
            }
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input {...register('password') } name="password" type="password" className="form-control" id="exampleInputPassword1" />
            {errors.password?.message &&
              <div>{errors.password.message}</div>
            }
          </div>
          <div className="mb-3 form-check">
            <input {...register('remember') } type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">Remember</label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
}

