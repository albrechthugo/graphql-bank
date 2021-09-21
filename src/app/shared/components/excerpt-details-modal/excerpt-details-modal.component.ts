import { AccountService } from './../../../services/account.service'
import { GetTransaction } from './../../../models/transaction'
import { Component, ViewChild } from '@angular/core'
import { PoModalAction, PoModalComponent, PoTableColumn } from '@po-ui/ng-components'

@Component({
  selector: 'app-excerpt-details-modal',
  templateUrl: './excerpt-details-modal.component.html',
  providers: [AccountService]
})
export class ExcerptDetailsModalComponent {
  @ViewChild(PoModalComponent, { static: true })
  modal?: PoModalComponent

  transactions?: Array<GetTransaction>

  action: PoModalAction = {
    label: 'Fechar',
    action: () => this.close()
  }

  columns: Array<PoTableColumn> = [
    { property: 'destinyFriendName', label: 'Destino', width: '70%' },
    { property: 'amount', label: 'Valor', width: '30%' }
  ]

  constructor(private accountService: AccountService) {}

  open(): void {
    this.modal?.open()
    this.accountService
      .getAccountTransactions()
      .subscribe(({ data }) => (this.transactions = data.account.transactions))
  }

  private close(): void {
    this.transactions = null!
    this.modal?.close()
  }
}
