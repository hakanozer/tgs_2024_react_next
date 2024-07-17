import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchProduct } from '../services/productService'
import { Product } from '../models/IProducts'
import ProductItem from '../components/ProductItem'

function Search() {

  const [searchParams, setSearchParams] = useSearchParams()
  const [productArr, setProductArr] = useState<Product[]>([])
  const [qData, setQData] = useState('')
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const q = searchParams.get('q')
    if (q) {
        setQData(q)
        searchProduct(q).then(res => {
            setTotal(res.data.total)
            const arr = res.data.products
            setProductArr(arr)
        })
    }
  }, [searchParams])

  return (
    <>
      <h2>Search: {qData} - {total}</h2>
      <div className='row'>
        {productArr.map((item, index) => 
          <ProductItem key={index} item={item} />
        )}
      </div>
    </>
  )
}

export default Search