import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GemDetailPage } from './gem-detail.page';

const routes: Routes = [
  {
    path: '',
    component: GemDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GemDetailPageRoutingModule {}
