import { Pipe, PipeTransform } from '@angular/core'
import { GetTransaction } from 'src/app/core/entities/transaction'

@Pipe({
  name: 'transactionType'
})
export class TransactionTypePipe implements PipeTransform {
  transform(transaction: GetTransaction): string {
    return transaction?.type == 'CREDIT' ? 'color: #290' : 'color: #f22'
  }
}
