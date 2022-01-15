import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RimsComponent } from './rims/rims.component';

const routes: Routes = [
  {
    path: '',
    component: RimsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RimsRoutingModule { }
