import { GetTransaction } from './transaction'

export type Account = {
  name: string
  id: string
  avatarImage: { url: string }
  transactions: Array<GetTransaction>
}
