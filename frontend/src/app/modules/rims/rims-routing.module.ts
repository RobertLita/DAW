import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRimComponent } from './newrim/newrim.component';
import { RimsComponent } from './rims/rims.component';

const routes: Routes = [
  {
    path: '',
    component: RimsComponent,
  },
  {
    path: 'newrim',
    component: NewRimComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RimsRoutingModule { }
