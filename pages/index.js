import { useState } from 'react'
import Head from 'next/head'
import Header from '../containers/Header/Header'
import Footer from '../containers/Footer/Footer'
import Posts from '../containers/Posts/Posts'
import Button from 'react-bootstrap/Button'
import PostModal from '../containers/PostModal/PostModal'

const Home = () => {
  const [showPostModal,setShowPostModal] = useState(false)
  const handleTogglePostModal = () => {
    setShowPostModal(!showPostModal)
  }
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="center">
          <Button onClick={handleTogglePostModal} variant="primary">
            Add Post
          </Button>
          <PostModal show={showPostModal} handleClose={handleTogglePostModal} />
        </div>
        <Posts />
      </main>

      <Footer />
    </div>
  )
}


export default Home
