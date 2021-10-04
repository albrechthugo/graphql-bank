import { FriendsService } from 'src/app/services/friends.service'
import { Component, ViewChild } from '@angular/core'
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Friend } from 'src/app/core/entities/friend'
import { DoTransaction } from 'src/app/core/entities/transaction'

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
    amount: new FormControl(null, Validators.required),
    message: new FormControl(null, Validators.maxLength(100))
  })

  constructor(private readonly friendsService: FriendsService) {}

  open(friend: Friend): void {
    this.form.reset()
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

    const transaction: DoTransaction = {
      destinyFriendId: this.form.get('friendId')?.value,
      amount: this.form.get('amount')?.value,
      message: this.form.get('message')?.value
    }

    this.friendsService.doTransferToFriend(transaction).subscribe(() => this.close())
  }
}
