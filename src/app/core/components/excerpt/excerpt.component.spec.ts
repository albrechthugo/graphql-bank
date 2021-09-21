import { mockAccountResponse } from './../../../shared/mocks/account/accountMock'
import { fakeAsync, tick } from '@angular/core/testing'
import { AccountService } from 'src/app/services/account.service'
import { ExcerptComponent } from './excerpt.component'
import { of } from 'rxjs'

describe('<app-excerpt>', () => {
  let component: ExcerptComponent
  let accountService: jasmine.SpyObj<AccountService>

  beforeEach(() => {
    accountService = jasmine.createSpyObj<AccountService>(['getAccount'])
    component = new ExcerptComponent(accountService)
    accountService.getAccount.and.returnValue(of(mockAccountResponse))
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should fetch data from account service, populate component account with response and title should be `Bem-vindo, Reaper`', fakeAsync(() => {
    expect(component.account).toBeUndefined()

    component.ngOnInit()

    tick()

    expect(component.account?.name).toEqual('Reaper')
    expect(component.account?.id).toEqual('1')
    expect(component.account?.avatarImage.url).toEqual('mock.url')
    expect(component.title).toEqual('Bem-vindo, Reaper')
  }))
})
