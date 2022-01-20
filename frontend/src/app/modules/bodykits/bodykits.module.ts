import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodykitsRoutingModule } from './bodykits-routing.module';
import { BodykitsComponent } from './bodykits/bodykits.component';


@NgModule({
  declarations: [
    BodykitsComponent
  ],
  imports: [
    CommonModule,
    BodykitsRoutingModule
  ]
})
export class BodykitsModule { }
