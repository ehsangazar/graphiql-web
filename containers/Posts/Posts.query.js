import { gql } from '@apollo/client'

const POSTS_QUERY = gql`
  {
    posts {
      id
      title
      description
    }
  }
`

export default POSTS_QUERY
