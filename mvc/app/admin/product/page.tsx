const arr = [
    {id: 10, title: 'Product-1'},
    {id: 11, title: 'Product-2'},
    {id: 13, title: 'Product-3'}
]
import PostItem from "@/app/components/PostItem"
import Link from "next/link"
import { Suspense } from "react"

function Product() {
  
  return (
    <>
        <h2>Product</h2>
        {arr.map((item, index) => 
            <Link key={index} href={'/admin/detail/'+ item.id} >{item.title}</Link>
        )}
        <Suspense fallback={<div>Yükleniyor...</div>}>
          <PostItem />
        </Suspense>
        
    </>
    
  )
}

export default Product