import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ApolloLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { environment } from 'src/environments/environment'

export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }))

  const auth = setContext((operation, context) => {
    if (environment.apiToken === null) {
      return {}
    } else {
      return {
        headers: {
          Authorization: `Bearer ${environment.apiToken}`
        }
      }
    }
  })

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri: environment.apiUrl })])
  const cache = new InMemoryCache()

  return {
    link,
    cache
  }
}

@NgModule({
  exports: [HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
