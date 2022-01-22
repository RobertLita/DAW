import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodykitsRoutingModule } from './bodykits-routing.module';
import { BodykitsComponent } from './bodykits/bodykits.component';
import { NewBodyKitComponent} from './newbodykit/newbodykit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SlideshowModule } from 'ng-simple-slideshow';


@NgModule({
  declarations: [
    BodykitsComponent,
    NewBodyKitComponent
  ],
  imports: [
    CommonModule,
    BodykitsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SlideshowModule,
  ]
})
export class BodykitsModule { }
