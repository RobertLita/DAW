import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksPipe } from 'src/app/marks.pipe';
//import { HoverBtnDirective } from 'src/app/hover-btn.directive';


@NgModule({
  declarations: [MarksPipe,],
  imports: [
    CommonModule,
    
  ],
  exports: [
    MarksPipe,

  ]
})
export class SharedModule { }
