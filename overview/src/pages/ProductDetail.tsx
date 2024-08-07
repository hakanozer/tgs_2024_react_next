import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Product } from '../models/IProducts'
import { singleProduct } from '../services/productService'
import { addRemoveLike, allLikes } from '../utils/store'
import { LikeContext } from '../contexts/LikesContext'

function ProductDetail() {
  
  const [bigImage, setBigImage] = useState('')  
  const [product, setProduct] = useState<Product>()
  const params = useParams()
  const location = useLocation()
  useEffect(() => {
    const pid = params.pid
    if (pid) {
        singleProduct(pid).then(res => {
            const data = res.data
            setProduct(data)
            setBigImage(data.images[0])
        })
    }
  }, [])
  
  const item = location.state as Product
  
  const likesContext = useContext(LikeContext)
  const fncLike = () => {
    const pid = params.pid
    if (pid) {
        addRemoveLike(pid)
        const arrLikes = allLikes()
        likesContext.setLikes(arrLikes)
    }
  }

  const [likesStatus, setLikesStatus] = useState(false)
  useEffect(() => {
    const pid = params.pid
    if (pid) {
        const likesArr = likesContext.likes
        const index = likesArr.findIndex(item => item === pid)
        const likesStatus = index === -1 ? false : true
        setLikesStatus(likesStatus)
    }
  }, [likesContext.likes])

  return (
    <>
        { product && 
            <div className='row'>
                <div className='col-sm-6'>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <div>{product.price}₺</div>
                    <i onClick={fncLike}  role='button' className="bi bi-suit-heart" style={{fontSize: 30, color: likesStatus === true ? 'red': ''}}></i>
                </div>
                <div className='col-sm-6'>
                    <img src={bigImage} className='img-fluid' style={{maxHeight: 400,}} />
                    <hr></hr>
                    { product.images.map((item, index) => 
                        <img onClick={() => setBigImage(item)} key={index} src={item} className='img-thumbnail' style={{maxWidth: 100,}} />
                    )}
                </div>
            </div>
        }
    </>
  )
}

export default ProductDetail