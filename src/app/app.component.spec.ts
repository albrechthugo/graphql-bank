import { TransactionsComponent } from './pages/transactions/transactions.component'
import { Router } from '@angular/router'
import { AppComponent } from './app.component'
import { BankStatementComponent } from './pages/bank-statement/bank-statement.component'

describe('<app-root>', () => {
  const router = jasmine.createSpyObj<Router>(['navigateByUrl'])
  let app: AppComponent

  beforeEach(() => {
    app = new AppComponent(router)
  })

  it('should create the app', () => {
    expect(app).toBeTruthy()
  })

  it(`should have as title 'Angular GraphQL Bank'`, () => {
    expect(app.title).toEqual('Angular GraphQL Bank')
  })

  it(`should mark statementTabIsActive as true transactionsTabIsActive as false and  when router emit the activate event with 'BankStatementComponent'`, () => {
    expect(app.statementTabIsActive).toBeFalse()
    expect(app.transactionsTabIsActive).toBeFalse()

    app.onActiveNewComponent(new BankStatementComponent())

    expect(app.statementTabIsActive).toBeTrue()
    expect(app.transactionsTabIsActive).toBeFalse()
  })

  it(`should mark transactionsTabIsActive as true statementTabIsActive as false and  when router emit the activate event with 'BankStatementComponent'`, () => {
    expect(app.statementTabIsActive).toBeFalse()
    expect(app.transactionsTabIsActive).toBeFalse()

    app.onActiveNewComponent(new TransactionsComponent())

    expect(app.statementTabIsActive).toBeFalse()
    expect(app.transactionsTabIsActive).toBeTrue()
  })
})
