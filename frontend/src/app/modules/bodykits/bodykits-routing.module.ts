import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodykitsRoutingModule { }
