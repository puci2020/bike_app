import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

type LoginFormGroup = FormGroup<{
  email: FormControl<string>,
  password: FormControl<string>
}>
export const StrongPasswordRegx: RegExp =
  /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
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
        validators: [Validators.required, Validators.minLength(8), Validators.pattern(StrongPasswordRegx)],
        nonNullable: true
      },
    ),
  })

  showPasswordErrors(passwordValue: string): string{
    if (!passwordValue) return '';
    if (passwordValue.match('^(?=.*[A-Z])'))
      return 'At least uppercase letter'
    else if (passwordValue.match('(?=.*[a-z])'))
      return 'At least one lowercase letter'
    else if (passwordValue.match('(.*[0-9].*)'))
      return 'At least one digit'
    else if (passwordValue.match('.{8,}'))
      return 'At least 8 characters long'

    return ''
  }

  onSubmit(){
    console.log(this.loginForm)
  }
  }
