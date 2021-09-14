import { Friend } from './../../../models/friend'
import { Component, ViewChild } from '@angular/core'
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss']
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
    amount: new FormControl(null, Validators.required),
    message: new FormControl(null, Validators.maxLength(100))
  })

  constructor() {}

  open(friend: Friend): void {
    this.form.reset()
    this.title = `Transferindo para ${friend.name}`
    this.modal?.open()
  }

  private close(): void {
    this.form.reset()
    this.modal?.close()
  }

  private sendTransfer(): void {
    this.close()
  }
}
