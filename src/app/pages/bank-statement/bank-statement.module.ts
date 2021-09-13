import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BankStatementRoutingModule } from './bank-statement-routing.module'
import { BankStatementComponent } from './bank-statement.component'

@NgModule({
  declarations: [BankStatementComponent],
  imports: [CommonModule, BankStatementRoutingModule]
})
export class BankStatementModule {}
