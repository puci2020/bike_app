import { Component } from '@angular/core';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faHome, faMotorcycle, faUser, faGasPump} from "@fortawesome/free-solid-svg-icons";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-bottom-menu',
  standalone: true,
    imports: [
        MatButtonToggleModule,
        FaIconComponent,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './bottom-menu.component.html',
  styleUrl: './bottom-menu.component.sass'
})
export class BottomMenuComponent {

  protected readonly faGasPump = faGasPump;
  protected readonly faMotorcycle = faMotorcycle;
    protected readonly faHome = faHome;
    protected readonly faUser = faUser;
}
