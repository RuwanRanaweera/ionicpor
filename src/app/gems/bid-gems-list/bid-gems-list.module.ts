import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidGemsListPageRoutingModule } from './bid-gems-list-routing.module';

import { BidGemsListPage } from './bid-gems-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidGemsListPageRoutingModule
  ],
  declarations: [BidGemsListPage]
})
export class BidGemsListPageModule {}
