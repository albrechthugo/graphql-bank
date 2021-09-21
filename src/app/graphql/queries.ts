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
    account(where: { id: "cktuladjs0a5u0c8354b9xdz4" }) {
      id
      name
      avatarImage {
        url
      }
    }
  }
`

export const GET_ACCOUNT_TRANSACTIONS = gql`
  query getAccountTransactions {
    account(where: { id: "cktuladjs0a5u0c8354b9xdz4" }) {
      transactions
    }
  }
`
