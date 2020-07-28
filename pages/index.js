import Head from 'next/head'
import { useEffect, useState } from 'react'
import { gql } from '@apollo/client'
import Header from '../containers/Header/Header'
import Footer from '../containers/Footer/Footer'
import Post from '../containers/Post/Post'

import client from '../utils/clientGraphQL'

const Home = () => {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    client
      .query({
        query: gql`
          {
            posts {
              id
              title
              description
            }
          }
        `,
      })
      .then((result) => {
        if (result && result.data && result.data.posts){
          setPosts(result.data.posts)
        }
      })
  },[])
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="posts">
          {posts.map(post => (
            <Post
              post={post}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}


export default Home
