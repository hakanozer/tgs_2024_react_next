const arr = [
    {id: 10, title: 'Product-1'},
    {id: 11, title: 'Product-2'},
    {id: 13, title: 'Product-3'}
]
import Link from "next/link"

function Product() {
  return (
    <>
        <h2>Product</h2>
        {arr.map((item, index) => 
            <Link href={'/admin/detail/'+ item.id} >{item.title}</Link>
        )}
    </>
    
  )
}

export default Product