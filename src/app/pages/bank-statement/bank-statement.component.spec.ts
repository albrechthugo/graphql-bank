import { BankStatementComponent } from './bank-statement.component'

describe('<app-bank-statement>', () => {
  let component: BankStatementComponent

  beforeEach(() => {
    component = new BankStatementComponent()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
