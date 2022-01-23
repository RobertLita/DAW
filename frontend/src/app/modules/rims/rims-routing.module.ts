import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRimComponent } from './newrim/newrim.component';
import { RimComponent } from './rim/rim.component';
import { RimsComponent } from './rims/rims.component';

const routes: Routes = [
  {
    path: '',
    component: RimsComponent,
  },
  {
    path: 'newrim',
    component: NewRimComponent,
  },
  {
    path: ':id',
    component: RimComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RimsRoutingModule { }
