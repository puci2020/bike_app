import { Component } from '@angular/core';
import {BottomMenuComponent} from "../../shared/components/bottom-menu/bottom-menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BottomMenuComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
