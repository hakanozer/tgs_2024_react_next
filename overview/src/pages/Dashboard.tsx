import React, { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchForm from '../components/SearchForm'
import { allProduct } from '../services/productService'
import { Product } from '../models/IProducts'
import ProductItem from '../components/ProductItem'

function Dashboard() {

  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log(search)
  }, [search])

  const sendSearch = (evt: FormEvent) => {
    evt.preventDefault()
    console.log("Send Search", search)
  }

  const [productArr, setProductArr] = useState<Product[]>([])
  useEffect(() => {
    allProduct().then(res => {
      const arr = res.data.products
      setProductArr(arr)
    })
  }, [])

  return (
    <>
      <h2>Dashboard</h2>
      <SearchForm setSearch={setSearch} sendSearch={sendSearch} search={search} />
      <hr/>
      <div className='row'>
        {productArr.map((item, index) => 
          <ProductItem key={index} item={item} />
        )}
      </div>
    </>
  )


}

export default Dashboard