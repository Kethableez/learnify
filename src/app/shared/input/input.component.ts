import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormControlName, NgControl } from '@angular/forms';
import { FocusDirective } from '../directives/focus.directive';

@Component({
  selector: 'ktbz-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent  implements OnInit, AfterContentInit  {

  // @ContentChild(FormControlName) controlName!: FormControlName;
  @Input()
  control!: FormControl;

  @Input()
  type: 'text' | 'password' | 'textarea' = 'text';

  @Input()
  label: string = '';

  formControl!: FormControl;
  isFocused = false;
  isPassword = false;
  visible = false;

  @HostListener('focusin')
  // @HostListener('blur', ['false'])
  ff(isFocused: boolean): void {
    this.isFocused = true;
  }

  @HostListener('focusout')
  fo(): void {
    this.isFocused = false;
  }

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {  }

  ngOnInit(): void {
    this.isPassword = this.type === 'password';
  }

  ngAfterContentInit(): void {
    // if(this.controlName) {
    //   this.formControl = this.controlName.control;
    //   this.isPassword = this.controlName.name === 'password';

    // }
  }

  toggleVisibility() {
    this.visible = !this.visible;
    this.type = this.visible ? 'text' : 'password';
  }

}
