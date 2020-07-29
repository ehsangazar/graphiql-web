import { useQuery } from '@apollo/client'
import { useEffect} from 'react'
import Post from '../Post/Post'
import PostsQuery from './Posts.query'

const Posts = ({ refreshNumber }) => {
  const { loading, error, data, refetch } = useQuery(PostsQuery)

  useEffect(() => {
    refetch()
  }, [refreshNumber])

  if (error) return <p>Error :(</p>
  return (
    <div>
      {loading && <div>Loading</div>}

      <div className="posts">
        {data && data.posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export default Posts
