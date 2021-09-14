import { fakeAsync, tick } from '@angular/core/testing'
import { of } from 'rxjs'
import { FriendsService } from 'src/app/services/friends.service'
import { mockFriendsResponse } from './../../../shared/mocks/friend/friendMock'
import { FriendsComponent } from './friends.component'

describe('<app-friends>', () => {
  let component: FriendsComponent
  let friendsService: jasmine.SpyObj<FriendsService>

  beforeEach(() => {
    friendsService = jasmine.createSpyObj<FriendsService>(['getFriends'])
    component = new FriendsComponent(friendsService)
    friendsService.getFriends.and.returnValue(of(mockFriendsResponse))
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should fetch data from friends service and populate friends array with response', fakeAsync(() => {
    expect(component.friends.length).toBe(0)

    component.ngOnInit()

    tick()

    expect(component.friends.length).toBe(3)
    expect(component.friends[0].username).toEqual('mockusername1')
    expect(component.friends[1].username).toEqual('mockusername2')
    expect(component.friends[2].username).toEqual('mockusername3')
  }))
})
