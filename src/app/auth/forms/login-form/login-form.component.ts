import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

type LoginFormGroup = FormGroup<{
  email: FormControl<string>,
  password: FormControl<string>
}>

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.sass'
})
export class LoginFormComponent {
  loginForm: LoginFormGroup = new FormGroup({
    email: new FormControl(
      '',
      {
        validators: [Validators.required, Validators.minLength(2), Validators.email],
        nonNullable: true
      },
    ),
    password: new FormControl(
      '',
      {
        validators: [Validators.required],
        nonNullable: true
      },
    ),
  })

  onSubmit(){
    console.log(this.loginForm)
  }
  }
