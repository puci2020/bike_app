import {Component, inject, Input} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatButtonModule} from "@angular/material/button";
import {Location} from "@angular/common";


@Component({
  selector: 'app-toolbar',
  standalone: true,
    imports: [
        MatToolbarModule,
        MatIconModule,
        FaIconComponent,
        MatButtonModule

    ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.sass'
})
export class ToolbarComponent {
    private location = inject(Location);

    @Input() backButton: boolean = true;
    @Input() title: string = '';

    protected readonly faArrowLeft = faArrowLeft;

    back(): void{
        this.location.back();
    }
}
