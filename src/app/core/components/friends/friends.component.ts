import { FriendsService } from 'src/app/services/friends.service'
import { Component, OnInit } from '@angular/core'
import { Friend } from 'src/app/core/entities/friend'
import { PoTableColumn } from '@po-ui/ng-components'

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
  providers: [FriendsService]
})
export class FriendsComponent implements OnInit {
  friends: Array<Friend> = []

  columns: Array<PoTableColumn> = [
    { property: 'id', label: '#', width: '10%' },
    { property: 'name', label: 'Nome', width: '50%' },
    { property: 'username', label: 'Usuário', width: '30%' },
    { property: 'action', label: ' ', width: '10%', type: 'cellTemplate' }
  ]

  constructor(private readonly friendsService: FriendsService) {}

  ngOnInit(): void {
    this.friendsService.getFriends().subscribe(({ data }) => (this.friends = data.friends))
  }
}
