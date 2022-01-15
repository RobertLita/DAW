import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RimsRoutingModule } from './rims-routing.module';
import { RimsComponent } from './rims/rims.component';


@NgModule({
  declarations: [
    RimsComponent
  ],
  imports: [
    CommonModule,
    RimsRoutingModule
  ]
})
export class RimsModule { }
