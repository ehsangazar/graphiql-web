import React from 'react'

const Post = ({post}) => {
  const { title, description } = post
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Post
