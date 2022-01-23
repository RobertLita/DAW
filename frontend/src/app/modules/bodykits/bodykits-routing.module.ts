import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodykitComponent } from './bodykit/bodykit.component';
import { BodykitsComponent } from './bodykits/bodykits.component';
import { NewBodyKitComponent } from './newbodykit/newbodykit.component';

const routes: Routes = [
  {
    path: '',
    component: BodykitsComponent
  },
  {
    path: 'newbodykit',
    component: NewBodyKitComponent
  },
  {
    path: ':id',
    component: BodykitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodykitsRoutingModule { }
