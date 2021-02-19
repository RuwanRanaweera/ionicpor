import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GemBidPage } from './gem-bid.page';

const routes: Routes = [
  {
    path: '',
    component: GemBidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GemBidPageRoutingModule {}
