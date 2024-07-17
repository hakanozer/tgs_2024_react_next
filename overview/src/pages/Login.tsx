import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { customerLogin } from '../services/customerService'
import { toast, ToastContainer } from 'react-toastify'
import { storeCustomer } from '../utils/util'

function Login() {

  const navigate = useNavigate()

  const [username, setUsername] = useState('emilys')
  const [password, setPassword] = useState('emilyspass')

  const userLogin = (evt: FormEvent) => {
    evt.preventDefault()
    console.log("Send RestApi", username, password)
    //window.location.href = "/dashboard"
    customerLogin(username, password).then(res => {
      const data = res.data
      storeCustomer(data)
      navigate('/dashboard', {replace: true})
    }).catch(err => {
      console.log(err.message)
      toast.warning(err.message)
    })
  }

  return (
    <>
        <div className="row">
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <h2>User Login</h2>
                <form onSubmit={userLogin}>
                    <div className='mb-3'>
                        <input required defaultValue={username} onChange={(evt) => setUsername(evt.target.value)} placeholder='Username' className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <input defaultValue={password} onChange={(evt) => setPassword(evt.target.value)} type='password' placeholder='Password' className='form-control' />
                    </div>
                    <button className='btn btn-success'>Send</button>
                </form>
            </div>
            <div className='col-sm-4'></div>
        </div>
    </>
  )
}

export default Login