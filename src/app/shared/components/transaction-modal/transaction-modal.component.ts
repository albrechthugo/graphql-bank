import { FriendsService } from 'src/app/services/friends.service'
import { Friend } from './../../../models/friend'
import { Component, ViewChild } from '@angular/core'
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Transaction } from 'src/app/models/transaction'

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  providers: [FriendsService]
})
export class TransactionModalComponent {
  @ViewChild(PoModalComponent, { static: true })
  modal?: PoModalComponent

  modalActions: Array<PoModalAction> = [
    { label: 'Cancelar', action: () => this.close() },
    { label: 'Enviar', action: () => this.sendTransfer() }
  ]

  title?: string

  form = new FormGroup({
    friendId: new FormControl(null, Validators.required),
    friendBalance: new FormControl(null, Validators.required),
    amount: new FormControl(null, Validators.required),
    message: new FormControl(null, Validators.maxLength(100))
  })

  constructor(private readonly friendsService: FriendsService) {}

  open(friend: Friend): void {
    this.form.reset()
    this.form.get('friendBalance')?.setValue(friend.balance)
    this.form.get('friendId')?.setValue(friend.id)
    this.title = `Transferindo para ${friend.name}`
    this.modal?.open()
  }

  private close(): void {
    this.form.reset()
    this.modal?.close()
  }

  private sendTransfer(): void {
    if (this.form.invalid) return

    const transaction: Transaction = {
      destinyFriendId: this.form.get('friendId')?.value,
      amount: this.form.get('friendBalance')?.value + this.form.get('amount')?.value,
      message: this.form.get('message')?.value
    }

    this.friendsService.doTransferToFriend(transaction).subscribe(() => this.close())
  }
}
