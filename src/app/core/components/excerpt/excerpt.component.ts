import { Component, OnInit } from '@angular/core'
import { PoPageAction } from '@po-ui/ng-components'
import { Account } from 'src/app/models/account'
import { AccountService } from 'src/app/services/account.service'

@Component({
  selector: 'app-excerpt',
  templateUrl: './excerpt.component.html',
  providers: [AccountService]
})
export class ExcerptComponent implements OnInit {
  title?: string

  account?: Account

  actions: PoPageAction[] = [{ label: 'Sair', action: () => this.logout() }]

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAccount().subscribe(({ data }) => {
      this.account = data.account
      this.title = `Bem-vindo, ${this.account.name}`
    })
  }

  private logout(): void {
    window.location.href = 'https://www.hugoalbrecht.dev.br'
  }
}
