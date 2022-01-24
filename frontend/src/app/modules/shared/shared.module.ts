import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksPipe } from 'src/app/marks.pipe';
import { HoverBtnDirective } from 'src/app/hover-btn.directive';
import { EditCarComponent } from './edit-car/edit-car.component';
import { ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditBodykitComponent } from './edit-bodykit/edit-bodykit.component';
import { EditRimComponent } from './edit-rim/edit-rim.component';


@NgModule({
  declarations: [MarksPipe,HoverBtnDirective, EditCarComponent, EditBodykitComponent, EditRimComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [EditCarComponent, EditBodykitComponent, EditRimComponent],
  exports: [
    MarksPipe,
    HoverBtnDirective
  ]
})
export class SharedModule { }
