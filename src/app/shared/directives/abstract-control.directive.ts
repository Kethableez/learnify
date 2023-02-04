import { Directive } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[ktbzAbstractControl]'
})
export abstract class AbstractControlDirective<T> implements ControlValueAccessor {
  abstract value: T;
  disabled = false;
  onChange: any = (value: T) => {}
  onTouch: any = () => {}

  constructor() { }

  writeValue(value: T): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  doUpdate() {
    this.onChange(this.value);
    this.onTouch();
  }

}
