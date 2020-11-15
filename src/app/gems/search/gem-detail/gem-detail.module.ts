import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GemDetailPageRoutingModule } from './gem-detail-routing.module';

import { GemDetailPage } from './gem-detail.page';
import { CreateBidingComponent } from '../../../biding/create-biding/create-biding.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GemDetailPageRoutingModule
  ],
  declarations: [GemDetailPage, CreateBidingComponent], entryComponents: [CreateBidingComponent]
})
export class GemDetailPageModule {}
