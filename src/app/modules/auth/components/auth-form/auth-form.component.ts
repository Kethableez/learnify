import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ktbz-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  constructor() { }

  authTabs = [{label: 'Login', value: 'login'}, { label: 'Register', value: 'register' }];
  selectedForm = this.authTabs[0].value;

  ngOnInit(): void {
  }

  changeForm(value: string) {
    if (this.selectedForm === value) return;
    this.selectedForm = value;
  }

}
