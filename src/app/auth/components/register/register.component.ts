import { Component } from '@angular/core';
import {ProvidersComponent} from "../providers/providers.component";
import {RegisterFormComponent} from "../../forms/register-form/register-form.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ProvidersComponent,
    RegisterFormComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent {

}
