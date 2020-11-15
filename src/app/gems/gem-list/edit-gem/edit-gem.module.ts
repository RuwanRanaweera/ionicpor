import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditGemPageRoutingModule } from './edit-gem-routing.module';

import { EditGemPage } from './edit-gem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditGemPageRoutingModule
  ],
  declarations: [EditGemPage]
})
export class EditGemPageModule {}
