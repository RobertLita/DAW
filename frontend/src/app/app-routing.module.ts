import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  // {
  //   path: '',
  //   canActivate: [AuthGuard],
  // },
  {
    path: '',
    loadChildren: () => import('src/app/modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'cars',
    loadChildren: () => import('src/app/modules/cars/cars.module').then(m => m.CarsModule),
  },
  {
    path: 'newcar',
    loadChildren: () => import('src/app/modules/cars/cars.module').then(m => m.CarsModule),
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'rims',
    loadChildren: () => import('src/app/modules/rims/rims.module').then(m => m.RimsModule),
  },
  {
    path: 'owners',
    loadChildren: () => import('src/app/modules/owners/owners.module').then(m => m.OwnersModule),
  },
  {
    path: 'bodykits',
    loadChildren: () => import('src/app/modules/bodykits/bodykits.module').then(m => m.BodykitsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
