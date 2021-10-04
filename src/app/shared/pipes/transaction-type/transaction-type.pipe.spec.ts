import { GetTransaction } from 'src/app/core/entities/transaction'
import { TransactionTypePipe } from './transaction-type.pipe'

describe('TransactionTypePipe', () => {
  const pipe = new TransactionTypePipe()

  const transaction: GetTransaction = {
    amount: 120,
    type: null!,
    destinyFriendName: 'mock-friend-name',
    destinyFriendId: 'uuid',
    message: 'mock-message'
  }

  it('create an instance', () => {
    expect(pipe).toBeTruthy()
  })

  it('should return css style to debit transaction', () => {
    transaction.type = 'DEBIT'
    expect(pipe.transform(transaction)).toEqual('color: #f22')
  })

  it('should return css style to credit transaction', () => {
    transaction.type = 'CREDIT'
    expect(pipe.transform(transaction)).toEqual('color: #290')
  })
})
