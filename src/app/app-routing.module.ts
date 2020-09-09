import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m=> m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
