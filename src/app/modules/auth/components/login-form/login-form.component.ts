import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ktbz-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private builder: FormBuilder,
    private router: Router
  ) { }

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.builder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  getControl(controlName: string) {
    return this.loginForm.controls[controlName] as FormControl;
  }

  doLogin() {
    this.router.navigate(['dashboard'])
  }

}
