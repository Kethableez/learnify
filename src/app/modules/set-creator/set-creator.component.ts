import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ktbz-set-creator',
  templateUrl: './set-creator.component.html',
  styleUrls: ['./set-creator.component.scss']
})
export class SetCreatorComponent implements OnInit {

  constructor(
    private builder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  ctrl = this.builder.control(null);

}
