import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodykitsComponent } from './bodykits/bodykits.component';

const routes: Routes = [
  {
    path: '',
    component: BodykitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodykitsRoutingModule { }
