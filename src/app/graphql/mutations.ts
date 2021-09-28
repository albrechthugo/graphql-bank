import { gql } from 'apollo-angular'

export const DO_TRANSFER = gql`
  mutation doTransfer($destinyFriendId: String!, $amount: Float!, $type: String!, $message: String!) {
    transaction(amount: $amount, type: $type, message: $message, destinyFriendId: $destinyFriendId) {
      destinyFriendId
    }
  }
`
