import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[ktbzInput], ktbzInput'
})
export class InputDirective implements AfterViewInit {

  constructor(
    private control: NgControl,
    private ref: ElementRef,
    private renderer: Renderer2
  ) {  }

  ngAfterViewInit(): void {
  }

}
