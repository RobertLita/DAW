import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksPipe } from 'src/app/marks.pipe';
import { HoverBtnDirective } from 'src/app/hover-btn.directive';


@NgModule({
  declarations: [MarksPipe,],
  imports: [
    CommonModule,
    HoverBtnDirective
  ],
  exports: [
    MarksPipe,
    HoverBtnDirective
  ]
})
export class SharedModule { }
