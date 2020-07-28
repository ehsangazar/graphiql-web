import { useQuery } from '@apollo/client'
import Post from '../Post/Post'
import PostsQuery from './Posts.query'

const Posts = () => {
  const { loading, error, data } = useQuery(PostsQuery)

  if (error) return <p>Error :(</p>
  return (
    <div>
      {loading && <div>Loading</div>}

      <div className="posts">
        {data && data.posts.map((post) => <Post post={post} />)}
      </div>
    </div>
  ) 
}

export default Posts
