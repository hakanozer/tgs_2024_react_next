import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Product } from '../models/IProducts'

function ProductDetail() {
  
  const params = useParams()
  const location = useLocation()
  useEffect(() => {
    console.log(params.pid)
  }, [])
  
  const item = location.state as Product

  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail