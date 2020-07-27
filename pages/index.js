import Head from 'next/head'
import Header from '../containers/Header/Header'
import Footer from '../containers/Footer/Footer'
import Post from '../containers/Post/Post'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="posts">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </main>

      <Footer />
    </div>
  )
}
