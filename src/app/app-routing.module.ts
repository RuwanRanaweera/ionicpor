import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'gems',
    // loadChildren: () => import('./gems/gems.module').then( m => m.GemsPageModule), canLoad: [AuthGuard]
    loadChildren: () => import('./gems/gems.module').then( m => m.GemsPageModule)
  },
  {
    path: 'biding',
    // loadChildren: () => import('./biding/biding.module').then( m => m.BidingPageModule),  canLoad: [AuthGuard]
    loadChildren: () => import('./biding/biding.module').then( m => m.BidingPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
        {
          path: 'new-gem',
          loadChildren: () => import('./gems/new-gem/new-gem.module').then( m => m.NewGemPageModule)
        },
        {
          path: 'edit-gem/:gemId',
          loadChildren: () => import('./gems/edit-gem/edit-gem.module').then( m => m.EditGemPageModule)
        },
        {
          path: ':gemId',
          loadChildren: () => import('./gems/gem-bid/gem-bid.module').then( m => m.GemBidPageModule)
        }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
