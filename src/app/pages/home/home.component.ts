import { Component } from '@angular/core';
import {BottomMenuComponent} from "../../shared/components/bottom-menu/bottom-menu.component";
import {ToolbarComponent} from "../../shared/components/toolbar/toolbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        BottomMenuComponent,
        ToolbarComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
