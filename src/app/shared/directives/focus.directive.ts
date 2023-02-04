import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[ktbzFocus]'
})
export class FocusDirective {

  isFocused = false;

  constructor() { }

  @HostListener('focus', ['true'])
  @HostListener('blur', ['false'])
  focusChanged(isFocused: boolean): void {
    this.isFocused = isFocused;
  }

}
