'use client'
import { useEffect, useState } from "react"
import { Post } from "../models/IPost"
import { getPosts } from "../services/postService"
import { useRouter } from "next/navigation"
import utf8 from 'base-64'

 function PostItem() {
  const router = useRouter()
  const [items, setItems] = useState<Post[]>([]) 
  useEffect(() =>  {
    getPosts().then(res => {
        const dt = res.data
        setItems(dt.posts)
    })
  }, [])
  
  const gotoDetail = (item: Post) => {
    sessionStorage.setItem('post', JSON.stringify(item))
    const baseItem = utf8.encode(JSON.stringify(item))
    router.push('/admin/postdetail?data='+baseItem)
  }
  return (
    <>
    <table className="table table-hover">
    <thead>
        <tr>
        <th scope="col">id</th>
        <th scope="col">title</th>
        <th scope="col">tags</th>
        </tr>
    </thead>
    <tbody>
        {items.map((item, index) => 
        <tr onClick={() => gotoDetail(item)} key={index} role="button">
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.tags[0]}</td>
        </tr>
        )}
    </tbody>
    </table>
    </>
  )
}

export default PostItem