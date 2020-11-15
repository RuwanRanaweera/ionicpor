import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GemListPage } from './gem-list.page';

const routes: Routes = [
  {
    path: '',
    component: GemListPage
  },
  {
    path: 'new-gem',
    loadChildren: () => import('./new-gem/new-gem.module').then( m => m.NewGemPageModule)
  },
  {
    path: 'edit-gem',
    loadChildren: () => import('./edit-gem/edit-gem.module').then( m => m.EditGemPageModule)
  },
  {
    path: 'gem-bid',
    loadChildren: () => import('./gem-bid/gem-bid.module').then( m => m.GemBidPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GemListPageRoutingModule {}
