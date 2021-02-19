import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FixedGemsListPageRoutingModule } from './fixed-gems-list-routing.module';

import { FixedGemsListPage } from './fixed-gems-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FixedGemsListPageRoutingModule
  ],
  declarations: [FixedGemsListPage]
})
export class FixedGemsListPageModule {}
