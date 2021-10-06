export interface GraphqlBankFixture {
  seletor: Seletor
  value: Value
}

interface Seletor {
  pageTitle: string
  accountDetailsTitle: string
  accountDetailsTab: string
  transactionsTab: string
  friendsTable: string
  friendsTableFirstRowNameColumn: string
  transferButton: string
  serviceWidget: string
  serviceWidgetButton: string
  transactionModal: string
  transactionModalAmountInput: string
  transactionModalMessageInput: string
  transactionModalSaveButton: string
  excerptDetailModal: string
  excerptDetailModalCloseButton: string
  excerptTable: string
  excerptTableFirstTransactionRow: string
}

interface Value {
  pageTitleValue: string
  accountDetailsTitleValue: string
  accountDetailsTabTitleValue: string
  transactionsTabTitleValue: string
  transferButtonLabelValue: string
  serviceWidgetLabelValue: string
  serviceWidgetButtonLabelValue: string
  transactionModalTitleValue: string
  transactionModalAmountValue: string
  transactionModalMessageValue: string
  excerptDetailModalTitleValue: string
  excerptTableFirstTransactionRowValue: string
}
