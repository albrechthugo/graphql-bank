import { ExcerptModule } from './../../core/components/excerpt/excerpt.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BankStatementRoutingModule } from './bank-statement-routing.module'
import { BankStatementComponent } from './bank-statement.component'

@NgModule({
  declarations: [BankStatementComponent],
  imports: [CommonModule, BankStatementRoutingModule, ExcerptModule]
})
export class BankStatementModule {}
