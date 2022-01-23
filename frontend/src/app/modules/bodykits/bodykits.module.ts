import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BodykitsRoutingModule } from './bodykits-routing.module';
import { BodykitsComponent } from './bodykits/bodykits.component';
import { NewBodyKitComponent} from './newbodykit/newbodykit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SlideshowModule } from 'ng-simple-slideshow';
import { BodykitComponent } from './bodykit/bodykit.component';
import { MarksPipe } from 'src/app/marks.pipe';


@NgModule({
  declarations: [
    BodykitsComponent,
    NewBodyKitComponent,
    BodykitComponent,
    MarksPipe
  ],
  imports: [
    CommonModule,
    BodykitsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SlideshowModule,
  ],
  exports: [
    MarksPipe
  ]
})
export class BodykitsModule { }
