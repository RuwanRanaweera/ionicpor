import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewGemPageRoutingModule } from './new-gem-routing.module';

import { NewGemPage } from './new-gem.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NewGemPageRoutingModule
  ],
  declarations: [NewGemPage]
})
export class NewGemPageModule {}
