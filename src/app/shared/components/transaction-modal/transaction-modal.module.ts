import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TransactionModalComponent } from './transaction-modal.component'
import { PoFieldModule, PoModalModule } from '@po-ui/ng-components'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [TransactionModalComponent],
  exports: [TransactionModalComponent],
  imports: [CommonModule, PoModalModule, PoFieldModule, ReactiveFormsModule]
})
export class TransactionModalModule {}
