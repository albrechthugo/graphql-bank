import { ApolloQueryResult } from '@apollo/client/core'
import { Friend } from 'src/app/core/entities/friend'

export const friend: Friend = {
  id: '1',
  balance: 500,
  name: 'Mock Name',
  username: 'mockusername'
}

export const friends: Array<Friend> = [
  {
    id: '1',
    balance: 500,
    name: 'Mock Name 1',
    username: 'mockusername1'
  },
  {
    id: '2',
    balance: 300,
    name: 'Mock Name 2',
    username: 'mockusername2'
  },
  {
    id: '3',
    balance: 200,
    name: 'Mock Name 3',
    username: 'mockusername3'
  }
]

export const mockFriendsResponse: ApolloQueryResult<{ friends: Array<Friend> }> = {
  data: {
    friends
  }
} as any

export const mockFriendResponse: ApolloQueryResult<{ friend: Friend }> = {
  data: {
    friend
  }
} as any
