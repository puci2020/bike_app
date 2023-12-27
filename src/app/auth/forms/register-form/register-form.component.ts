import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";

type RegisterFormGroup = FormGroup<{
  email: FormControl<string>,
  password: FormControl<string>
  confirmPassword: FormControl<string>
}>
export const StrongPasswordRegx: RegExp =
  /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

@Component({
  selector: 'app-register-form',
  standalone: true,
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.sass'
})
export class RegisterFormComponent {

  registerForm: RegisterFormGroup = new FormGroup({
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
    confirmPassword: new FormControl(
      '',
      {
        validators: [Validators.required, Validators.minLength(8), Validators.pattern(StrongPasswordRegx)],
        nonNullable: true
      },
    ),
  },
    confirmPasswordValidator
  )



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
    console.log(this.registerForm)
  }
}


export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if(control.get('password')?.value === control.get('confirmPassword')?.value) {
    control.get('confirmPassword')?.setErrors(null)
    return null;
  }else {
    control.get('confirmPassword')?.setErrors({PasswordNoMatch: true})
    return {PasswordNoMatch: true};
  }
};
