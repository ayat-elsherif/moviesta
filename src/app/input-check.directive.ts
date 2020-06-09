import { Directive,HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputCheck]'
})
export class InputCheckDirective {

  constructor(private el:ElementRef) { }

  @HostListener('blur') onBlur(){
    let myVal:string=this.el.nativeElement.value;
    this.el.nativeElement.value=myVal.toLowerCase();
  }

}
