import { TransactionsComponent } from './transactions.component'

describe('<app-transactions>', () => {
  let component: TransactionsComponent

  beforeEach(() => {
    component = new TransactionsComponent()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
