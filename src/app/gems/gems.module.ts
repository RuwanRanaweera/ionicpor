import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GemsPageRoutingModule } from './gems-routing.module';

import { GemsPage } from './gems.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GemsPageRoutingModule
  ],
  declarations: [GemsPage]
})
export class GemsPageModule {}
