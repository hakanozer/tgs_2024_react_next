import React, { useContext } from 'react'
import { LikeContext } from '../contexts/LikesContext'

function Likes() {

  // useContext
  const likesContext = useContext(LikeContext)

  return (
    <>
        <h2>Likes</h2>
        <div>{JSON.stringify(likesContext.likes)}</div>
    </>
  )
}

export default Likes