import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BidingPage } from './biding.page';

const routes: Routes = [
  {
    path: '',
    component: BidingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidingPageRoutingModule {}
