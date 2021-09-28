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

export const GET_ACCOUNT = gql`
  query getAccount {
    account {
      id
      name
    }
  }
`

export const GET_ACCOUNT_TRANSACTIONS = gql`
  query getAccountTransactions {
    account {
      transactions {
        type
        destinyFriendName
        amount
        message
      }
    }
  }
`
