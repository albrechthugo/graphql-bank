import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TransactionsRoutingModule } from './transactions-routing.module'
import { TransactionsComponent } from './transactions.component'

@NgModule({
  declarations: [TransactionsComponent],
  imports: [CommonModule, TransactionsRoutingModule]
})
export class TransactionsModule {}
