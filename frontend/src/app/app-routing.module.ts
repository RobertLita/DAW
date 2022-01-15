import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
  },
  {
    path: 'cars',
    loadChildren: () => import('src/app/modules/cars/cars.module').then(m => m.CarsModule),
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'rims',
    loadChildren: () => import('src/app/modules/rims/rims.module').then(m => m.RimsModule),
  },
  {
    path: 'owners',
    loadChildren: () => import('src/app/modules/owners/owners.module').then(m => m.OwnersModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
