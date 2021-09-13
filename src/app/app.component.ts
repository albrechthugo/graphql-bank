import { TransactionsComponent } from './pages/transactions/transactions.component'
import { BankStatementComponent } from './pages/bank-statement/bank-statement.component'
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular GraphQL Bank'

  statementTabIsActive = false
  transactionsTabIsActive = false

  constructor(public router: Router) {}

  onActiveNewComponent(component: BankStatementComponent | TransactionsComponent): void {
    if (component instanceof BankStatementComponent) {
      this.statementTabIsActive = true
      this.transactionsTabIsActive = false
    } else {
      this.statementTabIsActive = false
      this.transactionsTabIsActive = true
    }
  }
}
