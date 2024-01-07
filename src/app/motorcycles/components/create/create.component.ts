import { Component } from '@angular/core';
import {AddEditFormComponent} from "../../forms/add-edit-form/add-edit-form.component";
import {BottomMenuComponent} from "../../../shared/components/bottom-menu/bottom-menu.component";
import {ToolbarComponent} from "../../../shared/components/toolbar/toolbar.component";

@Component({
  selector: 'app-create',
  standalone: true,
    imports: [
        AddEditFormComponent,
        BottomMenuComponent,
        ToolbarComponent
    ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.sass'
})
export class CreateComponent {


}
