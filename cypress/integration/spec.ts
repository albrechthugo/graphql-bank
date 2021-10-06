import { GraphqlBankFixture } from 'cypress/support/graphql-bank.fixture'

context('graphqlbank - show your excerpt and do transactions', () => {
  let fixture: GraphqlBankFixture

  beforeEach(() => {
    cy.fixture('graphql-bank')
      .then(value => (fixture = value))
      .then(() => cy.visit('/'))
  })

  it('should visit homepage and contains correct title and page tabs', () => {
    cy.get(fixture.seletor.pageTitle)
      .contains(fixture.value.pageTitleValue)

      .get(fixture.seletor.accountDetailsTab)
      .contains(fixture.value.accountDetailsTabTitleValue)

      .get(fixture.seletor.transactionsTab)
      .contains(fixture.value.transactionsTabTitleValue)
  })

  it('should visit transactions page by tab and contain friends table', () => {
    cy.get(fixture.seletor.transactionsTab)
      .click()
      .location('href', { timeout: Cypress.env('default_timeout_pageload') })
      .should('contain', 'transactions')

      .get(fixture.seletor.friendsTable)
      .should('be.visible')
  })

  it('should visit account details page by tab and contain correct title and services widget', () => {
    cy.get(fixture.seletor.accountDetailsTab)
      .click()
      .location('href', { timeout: Cypress.env('default_timeout_pageload') })
      .should('contain', 'bank-statement')

      .get(fixture.seletor.serviceWidget)
      .should('be.visible')

      .get(fixture.seletor.serviceWidget)
      .contains(fixture.value.serviceWidgetLabelValue)

      .get(fixture.seletor.serviceWidgetButton)
      .contains(fixture.value.serviceWidgetButtonLabelValue)
  })

  it('should do transfer to friend and in excerpt page should has that transaction', () => {
    let friendName = ''

    cy.get(fixture.seletor.transactionsTab)
      .click()
      .location('href', { timeout: Cypress.env('default_timeout_pageload') })

      .get(fixture.seletor.transferButton)
      .click()

      .get(fixture.seletor.transactionModal)
      .should('be.visible')

      .get(fixture.seletor.friendsTableFirstRowNameColumn)
      .then(el => (friendName = el.text()))

      .get(fixture.seletor.transactionModal)
      .contains(fixture.value.transactionModalTitleValue.replace('{name}', friendName))

      .get(fixture.seletor.transactionModalAmountInput)
      .type(fixture.value.transactionModalAmountValue)

      .get(fixture.seletor.transactionModalMessageInput)
      .type(fixture.value.transactionModalMessageValue)

      .get(fixture.seletor.transactionModalSaveButton)
      .click()
      .location('href', { timeout: Cypress.env('default_timeout_pageload') })

      .get(fixture.seletor.transactionModal)
      .should('not.be.visible')

    cy.log('Acessando detalhes da conta')

      .get(fixture.seletor.accountDetailsTab)
      .click()

      .get(fixture.seletor.serviceWidgetButton)
      .click()

      .wait(1000)

      .get(fixture.seletor.excerptDetailModal)
      .should('be.visible')

      .get(fixture.seletor.excerptDetailModal)
      .contains(fixture.value.excerptDetailModalTitleValue)

      .get(fixture.seletor.excerptTable)
      .should('be.visible')

      .get(fixture.seletor.excerptTableFirstTransactionRow)
      .contains(
        fixture.value.excerptTableFirstTransactionRowValue.replace(
          '{amount}',
          fixture.value.transactionModalAmountValue
        )
      )

      .get(fixture.seletor.excerptDetailModalCloseButton)
      .click()

      .get(fixture.seletor.excerptDetailModal)
      .should('not.be.visible')
  })
})
