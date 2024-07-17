import React from 'react'
import { getCustomer } from '../utils/util'
import { Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Control( props: {item: JSX.Element} ) {

  const customer = getCustomer()

  return (
    customer === null
    ?
        <Navigate to={'/'} />
    :
    <>
        <Navbar customer={customer} />
        {props.item}
    </>
  )

}

export default Control