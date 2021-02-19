import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GemBidPageRoutingModule } from './gem-bid-routing.module';

import { GemBidPage } from './gem-bid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GemBidPageRoutingModule
  ],
  declarations: [GemBidPage]
})
export class GemBidPageModule {}
