import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditGemPage } from './edit-gem.page';

const routes: Routes = [
  {
    path: '',
    component: EditGemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditGemPageRoutingModule {}
