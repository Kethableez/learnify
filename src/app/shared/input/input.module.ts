import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { InputErrorModule } from '../input-error/input-error.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DisableAutofillDirective } from './disable-autofill.directive';



@NgModule({
  declarations: [
    InputComponent,
    DisableAutofillDirective
  ],
  imports: [
    InputErrorModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
