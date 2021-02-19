import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BidGemsListPage } from './bid-gems-list.page';

const routes: Routes = [
  {
    path: '',
    component: BidGemsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidGemsListPageRoutingModule {}
