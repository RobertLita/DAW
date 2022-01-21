import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RimsRoutingModule } from './rims-routing.module';
import { RimsComponent } from './rims/rims.component';
import { NewRimComponent} from './newrim/newrim.component';
import { ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    RimsComponent,
    NewRimComponent
  ],
  imports: [
    CommonModule,
    RimsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class RimsModule { }
