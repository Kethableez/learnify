import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ktbz-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss']
})
export class InputErrorComponent implements OnInit {

  @Input()
  errors: any;

  constructor() { }

  ngOnInit(): void {
  }

  get parsedErrors() {
    return Object.keys(this.errors);
  }

}

const errs = {
  unique: true,
  minLength: {actualLength: 3, requiredLength: 6},
  maxLength: {actualLength: 3, requiredLength: 6},
  required: true
}
