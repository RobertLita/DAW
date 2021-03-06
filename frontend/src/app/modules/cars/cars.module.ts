import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars/cars.component';
import { NewCarComponent } from './newcar/newcar.component';
import { ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CarComponent } from './car/car.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CarsComponent,
    NewCarComponent,
    CarComponent,
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SlideshowModule,
    SharedModule,
  ],

})
export class CarsModule { }
