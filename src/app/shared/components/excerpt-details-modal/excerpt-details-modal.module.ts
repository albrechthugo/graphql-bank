import { PoModalModule, PoTableModule } from '@po-ui/ng-components'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExcerptDetailsModalComponent } from './excerpt-details-modal.component'

@NgModule({
  declarations: [ExcerptDetailsModalComponent],
  exports: [ExcerptDetailsModalComponent],
  imports: [CommonModule, PoModalModule, PoTableModule]
})
export class ExcerptDetailsModalModule {}
