import { Transaction } from './../models/transaction'
import { DO_TRANSFER } from './../graphql/mutations'
import { Injectable } from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { Apollo } from 'apollo-angular'
import { Observable } from 'rxjs'
import { GET_FRIENDS } from '../graphql/queries'
import { Friend } from '../models/friend'

type FriendsResponse = {
  friends: Array<Friend>
}

@Injectable()
export class FriendsService {
  constructor(private readonly apollo: Apollo) {}

  getFriends(): Observable<ApolloQueryResult<FriendsResponse>> {
    return this.apollo.watchQuery<FriendsResponse>({
      query: GET_FRIENDS
    }).valueChanges
  }

  doTransferToFriend(transaction: Transaction): Observable<any> {
    return this.apollo.mutate({
      mutation: DO_TRANSFER,
      variables: {
        id: transaction.destinyFriendId,
        balance: transaction.amount
      }
    })
  }
}
