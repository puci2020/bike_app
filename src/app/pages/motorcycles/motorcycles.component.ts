import {Component, inject} from '@angular/core';
import {BottomMenuComponent} from "../../shared/components/bottom-menu/bottom-menu.component";
import {ToolbarComponent} from "../../shared/components/toolbar/toolbar.component";

@Component({
  selector: 'app-motorcycles',
  standalone: true,
    imports: [
        BottomMenuComponent,
        ToolbarComponent,
    ],
  templateUrl: './motorcycles.component.html',
  styleUrl: './motorcycles.component.sass'
})
export class MotorcyclesComponent {
}
