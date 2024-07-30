'use client'
import React, { FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form';
import { userLogin } from '../services/userService';
import { AxiosError } from 'axios';

function page() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const sendForm = (data: {email:  string, password: string}) => {
    userLogin(data.email, data.password).then(res => {
        const user = res.data.result
        console.log(user)
    }).catch(err => {
        const newErr = err as AxiosError
        if (newErr.response?.data) {
            window.alert(newErr.response.data.message)
            //console.log(newErr.response.data.message)
        }
    })
  }

  return (
    <div>
        <form onSubmit={handleSubmit(sendForm)}>
            <input {...register('email')}  />
            <input {...register('password')}  />
            <button>Send</button>
        </form>
    </div>
  )
}

export default page