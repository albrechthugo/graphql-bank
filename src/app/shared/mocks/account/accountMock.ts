import { ApolloQueryResult } from '@apollo/client/core'
import { Account } from 'src/app/core/entities/account'
import { GetTransaction } from 'src/app/core/entities/transaction'

export const account: Account = {
  id: '1',
  name: 'Reaper',
  avatarImage: { url: 'mock.url' },
  transactions: []
}

export const transactions: Array<GetTransaction> = [
  {
    type: 'CREDIT',
    amount: 10,
    destinyFriendName: 'Mock Friend Name',
    destinyFriendId: 'mock-uuid',
    message: 'Test message'
  }
]

export const mockAccountResponse: ApolloQueryResult<{ account: Account }> = {
  data: {
    account
  }
} as any

export const mockAccountTransactionsResponse: ApolloQueryResult<{ account: { transactions: Array<GetTransaction> } }> =
  {
    data: {
      account: {
        transactions
      }
    }
  } as any
