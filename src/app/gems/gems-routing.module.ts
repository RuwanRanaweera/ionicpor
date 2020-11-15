import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GemsPage } from './gems.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: GemsPage,
    children: [
      {  path: 'search',
      children: [
        {
          path: '',
          loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
        },
        {
          path: ':gemId',
          loadChildren: () => import('./search/gem-detail/gem-detail.module').then( m => m.GemDetailPageModule)
        }
      ]
    },
    {
      path: 'gem-list',
      children: [
        {
          path: '',
          loadChildren: () => import('./gem-list/gem-list.module').then( m => m.GemListPageModule)
        },
        {
          path: 'new-gem',
          loadChildren: () => import('./gem-list/new-gem/new-gem.module').then( m => m.NewGemPageModule)
        },
        {
          path: 'edit-gem/:gemId',
          loadChildren: () => import('./gem-list/edit-gem/edit-gem.module').then( m => m.EditGemPageModule)
        },
        {
          path: ':gemId',
          loadChildren: () => import('./gem-list/gem-bid/gem-bid.module').then( m => m.GemBidPageModule)
        }
      ]
    }
    ,
    {
      path: '',
      redirectTo: '/gems/tabs/search',
      pathMatch: 'full'
   }
  ]
 },
 {
    path: '',
    redirectTo: '/gems/tabs/search',
    pathMatch: 'full'
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GemsPageRoutingModule {}
