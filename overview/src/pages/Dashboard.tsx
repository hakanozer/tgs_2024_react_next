import React, { useEffect, useState } from 'react'
import { getCustomer, useCall } from '../utils/util'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

  useCall()
  const [Search, setSearch] = useState('')

  const navigate = useNavigate()
  useEffect(() => {
    console.log("useEffect - 1 Call")
    const customer = getCustomer()
    if (customer === null) {
      navigate('/')
    }
  }, [])

  useEffect(() => {
    console.log("useEffect - 2 Call")
  }, [])

  useEffect(() => {
    console.log(Search)
  }, [Search])




  return (
    <>
      <h2>Dashboard</h2>
      <div className='col-sm-4'>
        <input onChange={(evt) => setSearch(evt.target.value)} placeholder='Search..' className='form-control' />
      </div>
      
    </>
  )


}

export default Dashboard