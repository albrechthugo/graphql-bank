import { ExcerptDetailsModalModule } from './../../../shared/components/excerpt-details-modal/excerpt-details-modal.module'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { PoAvatarModule, PoPageModule, PoWidgetModule } from '@po-ui/ng-components'
import { ExcerptComponent } from './excerpt.component'

@NgModule({
  declarations: [ExcerptComponent],
  exports: [ExcerptComponent],
  imports: [CommonModule, PoPageModule, PoAvatarModule, PoWidgetModule, ExcerptDetailsModalModule]
})
export class ExcerptModule {}
