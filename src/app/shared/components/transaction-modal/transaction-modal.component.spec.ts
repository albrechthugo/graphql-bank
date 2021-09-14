import { PoModalComponent } from '@po-ui/ng-components'
import { friend as friendMock } from './../../mocks/friend/friendMock'
import { TransactionModalComponent } from './transaction-modal.component'

describe('TransactionModalComponent', () => {
  const component = new TransactionModalComponent()
  let modal: jasmine.SpyObj<PoModalComponent>

  beforeEach(() => {
    modal = jasmine.createSpyObj<PoModalComponent>(['open', 'close'])
    component.modal = modal
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should open modal and set title correctly', () => {
    component.open(friendMock)

    expect(component.title).toEqual('Transferindo para Mock Name')
    expect(component.modal!.open).toHaveBeenCalled()
  })

  it('should close modal and reset form', () => {
    component.form.get('amount')?.setValue(10)
    component.form.get('message')?.setValue('Transferindo pq vc foi legal')

    expect(component.form.get('amount')?.value).toEqual(10)
    expect(component.form.get('message')?.value).toEqual('Transferindo pq vc foi legal')

    component['close']()

    expect(component.form.get('amount')?.value).toBeNull()
    expect(component.form.get('message')?.value).toBeNull()
  })

  it('should send transfer', () => {
    component['sendTransfer']()

    expect(component.modal!.close).toHaveBeenCalled()
  })
})
