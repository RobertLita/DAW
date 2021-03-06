import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RimsRoutingModule } from './rims-routing.module';
import { RimsComponent } from './rims/rims.component';
import { NewRimComponent} from './newrim/newrim.component';
import { ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SlideshowModule } from 'ng-simple-slideshow';
import { RimComponent } from './rim/rim.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RimsComponent,
    NewRimComponent,
    RimComponent,
    
  ],
  imports: [
    CommonModule,
    RimsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SlideshowModule,
    SharedModule,
  ]
})
export class RimsModule { }
