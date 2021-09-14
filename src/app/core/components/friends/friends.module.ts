import { TransactionModalModule } from './../../../shared/components/transaction-modal/transaction-modal.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FriendsComponent } from './friends.component'
import { PoButtonModule, PoTableModule } from '@po-ui/ng-components'

@NgModule({
  declarations: [FriendsComponent],
  exports: [FriendsComponent],
  imports: [CommonModule, PoTableModule, PoButtonModule, TransactionModalModule]
})
export class FriendsModule {}
