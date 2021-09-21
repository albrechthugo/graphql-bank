import { Injectable } from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { Apollo } from 'apollo-angular'
import { Observable } from 'rxjs'
import { GetTransaction } from '../models/transaction'
import { GET_ACCOUNT, GET_ACCOUNT_TRANSACTIONS } from './../graphql/queries'
import { Account } from './../models/account'

type AccountResponse = {
  account: Account
}

type AccountTransactionsResponse = {
  account: {
    transactions: Array<GetTransaction>
  }
}

@Injectable()
export class AccountService {
  constructor(private readonly apollo: Apollo) {}

  getAccount(): Observable<ApolloQueryResult<AccountResponse>> {
    return this.apollo.watchQuery<AccountResponse>({
      query: GET_ACCOUNT
    }).valueChanges
  }

  getAccountTransactions(): Observable<ApolloQueryResult<AccountTransactionsResponse>> {
    return this.apollo.watchQuery<AccountTransactionsResponse>({
      query: GET_ACCOUNT_TRANSACTIONS
    }).valueChanges
  }
}
