import { Component } from '@angular/core';
import {ProvidersComponent} from "../providers/providers.component";
import {RegisterFormComponent} from "../../forms/register-form/register-form.component";
import {LogoComponent} from "../../../shared/components/logo/logo.component";

@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        ProvidersComponent,
        RegisterFormComponent,
        LogoComponent
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent {

}
