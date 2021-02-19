import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixedGemsListPage } from './fixed-gems-list.page';

const routes: Routes = [
  {
    path: '',
    component: FixedGemsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixedGemsListPageRoutingModule {}
