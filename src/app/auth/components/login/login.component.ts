import { Component } from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {LoginFormComponent} from "../../forms/login-form/login-form.component";
import {ProvidersComponent} from "../providers/providers.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    LoginFormComponent,
    ProvidersComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {

}
