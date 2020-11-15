import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GemListPageRoutingModule } from './gem-list-routing.module';

import { GemListPage } from './gem-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GemListPageRoutingModule
  ],
  declarations: [GemListPage]
})
export class GemListPageModule {}
