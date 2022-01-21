import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { NewCarComponent } from './newcar/newcar.component';

const routes: Routes = [
  {
    path: '',
    component: CarsComponent,
  },
  {
    path: 'newcar',
    component: NewCarComponent,
  },
  {
    path: ':id',
    component: CarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
