import { Component } from '@angular/core';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faHome, faMotorcycle, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-bottom-menu',
  standalone: true,
  imports: [
    MatButtonToggleModule,
    FaIconComponent
  ],
  templateUrl: './bottom-menu.component.html',
  styleUrl: './bottom-menu.component.sass'
})
export class BottomMenuComponent {

  protected readonly faTwitter = faTwitter;
  protected readonly faMotorcycle = faMotorcycle;
    protected readonly faHome = faHome;
    protected readonly faUser = faUser;
}
