import { Component } from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {LoginFormComponent} from "../../forms/login-form/login-form.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    LoginFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {

}
