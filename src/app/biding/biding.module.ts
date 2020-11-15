import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidingPageRoutingModule } from './biding-routing.module';

import { BidingPage } from './biding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidingPageRoutingModule
  ],
  declarations: [BidingPage]
})
export class BidingPageModule {}
