import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.sass'
})
export class ProvidersComponent {

}
