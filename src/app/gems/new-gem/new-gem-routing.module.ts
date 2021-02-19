import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewGemPage } from './new-gem.page';

const routes: Routes = [
  {
    path: '',
    component: NewGemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewGemPageRoutingModule {}
