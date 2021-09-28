import { PoModalComponent } from '@po-ui/ng-components'
import { of } from 'rxjs'
import { FriendsService } from 'src/app/services/friends.service'
import { friend as friendMock } from './../../mocks/friend/friendMock'
import { TransactionModalComponent } from './transaction-modal.component'

describe('<app-transaction-modal>', () => {
  let component: TransactionModalComponent
  let modal: jasmine.SpyObj<PoModalComponent>
  let friendsService: jasmine.SpyObj<FriendsService>

  beforeEach(() => {
    modal = jasmine.createSpyObj<PoModalComponent>(['open', 'close'])
    friendsService = jasmine.createSpyObj<FriendsService>(['doTransferToFriend'])

    component = new TransactionModalComponent(friendsService)

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
    friendsService.doTransferToFriend.and.returnValue(of(null))

    component.open(friendMock)

    component.form.get('amount')?.setValue(10)

    component['sendTransfer']()

    expect(friendsService.doTransferToFriend).toHaveBeenCalledWith({
      amount: 10,
      destinyFriendId: '1',
      message: null!
    })

    expect(component.modal!.close).toHaveBeenCalled()
  })

  it(`shouldn't send transfer if form is invalid`, () => {
    friendsService.doTransferToFriend.and.returnValue(of(null))

    component.open(friendMock)

    component['sendTransfer']()

    expect(friendsService.doTransferToFriend).not.toHaveBeenCalled()

    expect(component.modal!.close).not.toHaveBeenCalled()
  })
})
