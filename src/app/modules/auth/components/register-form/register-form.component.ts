import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { uniqueUsername } from 'src/app/core/validators/unique-username.validator';

@Component({
  selector: 'ktbz-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(
    private builder: FormBuilder
  ) { }

  registerForm!: FormGroup

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.builder.group({
      avatar: ['av-00.png', Validators.required],
      username: [null, {
        validators: Validators.compose([Validators.required, Validators.maxLength(12), Validators.minLength(6)]),
        asyncValidators: uniqueUsername,
        updateOn: 'blur'
      }],
      password: [null, Validators.compose([Validators.required, Validators.maxLength(12), Validators.minLength(6)])],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required]
    })
  }

  getControl(controlName: string) {
    return this.registerForm.controls[controlName] as FormControl;
  }

  setAvatar(avatar: string) {
    this.getControl('avatar').setValue(avatar);
    this.getControl('avatar').markAsTouched();
  }

}
