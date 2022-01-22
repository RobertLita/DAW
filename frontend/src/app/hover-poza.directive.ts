import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverPoza]'
})
export class HoverPozaDirective {

  constructor(
    public el: ElementRef
  ) { }
}
