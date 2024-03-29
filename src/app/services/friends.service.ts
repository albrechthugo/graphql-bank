import { Friend } from 'src/app/core/entities/friend'
import { DoTransaction } from 'src/app/core/entities/transaction'
import { DO_TRANSFER } from './../graphql/mutations'
import { Injectable } from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { Apollo } from 'apollo-angular'
import { Observable } from 'rxjs'
import { GET_FRIENDS } from '../graphql/queries'

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

  doTransferToFriend({ destinyFriendId, message, amount }: DoTransaction): Observable<any> {
    return this.apollo.mutate({
      mutation: DO_TRANSFER,
      variables: {
        destinyFriendId,
        amount,
        type: 'DEBIT',
        message
      }
    })
  }
}
