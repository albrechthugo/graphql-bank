import { FriendsModule } from './../../core/components/friends/friends.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TransactionsRoutingModule } from './transactions-routing.module'
import { TransactionsComponent } from './transactions.component'

@NgModule({
  declarations: [TransactionsComponent],
  imports: [CommonModule, TransactionsRoutingModule, FriendsModule]
})
export class TransactionsModule {}
