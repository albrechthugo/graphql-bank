import { gql } from 'apollo-angular'

export const DO_TRANSFER = gql`
  mutation doTransfer($id: ID!, $balance: Int!) {
    updateFriend(where: { id: $id }, data: { balance: $balance }) {
      balance
    }
  }
`
