import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksPipe } from 'src/app/marks.pipe';


@NgModule({
  declarations: [MarksPipe],
  imports: [
    CommonModule,
    
  ],
  exports: [
    MarksPipe
  ]
})
export class SharedModule { }
