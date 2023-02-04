import { Pipe, PipeTransform } from '@angular/core';

interface Errors {
  unique?: boolean;
  minlength?: {actualLength: number, requiredLength: number},
  maxlength?: {actualLength: number, requiredLength: number},
  required?: true
}

@Pipe({
  name: 'inputError'
})
export class InputErrorPipe implements PipeTransform {

  transform(error: Errors): string {
    if (error.unique) {
      return 'Given name is already taken';
    }
    else if (error.minlength) {
      return `Minimum length is ${error.minlength.requiredLength}`
    }
    else if (error.maxlength) {
      return `Maximum length is ${error.maxlength.requiredLength}`
    }
    else {
      return 'This field is required'
    }
  }

}
