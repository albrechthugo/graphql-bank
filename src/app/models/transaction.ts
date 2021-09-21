export type DoTransaction = {
  amount: number
  message?: string
  destinyFriendId: string
}

export type GetTransaction = {
  type: 'CREDIT' | 'DEBIT'
  amount: number
  destinyFriendName: string
}
