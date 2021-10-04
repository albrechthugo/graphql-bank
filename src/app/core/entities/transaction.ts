export interface GetTransaction {
  type: 'CREDIT' | 'DEBIT'
  amount: number
  destinyFriendName: string
  destinyFriendId: string
  message?: string
}

export type DoTransaction = Omit<GetTransaction, 'type' | 'destinyFriendName'>
