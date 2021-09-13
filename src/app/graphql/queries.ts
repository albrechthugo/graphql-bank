import { gql } from 'apollo-angular'

export const GET_FRIENDS = gql`
  query getFriends {
    friends {
      id
      name
      username
      balance
    }
  }
`
