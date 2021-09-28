import { mockAccountTransactionsResponse } from './../../mocks/account/accountMock'
import { fakeAsync, tick } from '@angular/core/testing'
import { AccountService } from 'src/app/services/account.service'
import { ExcerptDetailsModalComponent } from './excerpt-details-modal.component'
import { of } from 'rxjs'
import { PoModalComponent } from '@po-ui/ng-components'

describe('<app-excerpt-details-modal>', () => {
  let component: ExcerptDetailsModalComponent
  let modal: jasmine.SpyObj<PoModalComponent>
  let accountService: jasmine.SpyObj<AccountService>

  beforeEach(() => {
    modal = jasmine.createSpyObj<PoModalComponent>(['open', 'close'])

    accountService = jasmine.createSpyObj<AccountService>(['getAccountTransactions'])
    component = new ExcerptDetailsModalComponent(accountService)
    accountService.getAccountTransactions.and.returnValue(of(mockAccountTransactionsResponse))

    component.modal = modal
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should open modal, fetch data from account service, and populate transactions array with response', fakeAsync(() => {
    expect(component.transactions).toBeUndefined()

    component.open()

    tick()

    expect(component.modal?.open).toHaveBeenCalled()
    expect(component.transactions?.length).toBe(1)
    expect(component.transactions).toEqual([
      {
        amount: 10,
        destinyFriendName: 'Mock Friend Name',
        type: 'CREDIT',
        destinyFriendId: 'mock-uuid',
        message: 'Test message'
      }
    ])
  }))

  it('should close modal and clean transactions array', fakeAsync(() => {
    component.open()

    tick()

    expect(component.transactions?.length).toBe(1)

    component['close']()

    expect(component.transactions).toBeNull()
  }))
})
