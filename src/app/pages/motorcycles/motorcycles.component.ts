import {Component, inject, OnInit} from '@angular/core';
import {BottomMenuComponent} from "../../shared/components/bottom-menu/bottom-menu.component";
import {ToolbarComponent} from "../../shared/components/toolbar/toolbar.component";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-motorcycles',
  standalone: true,
    imports: [
        BottomMenuComponent,
        ToolbarComponent,
        FaIconComponent,
        MatButtonModule,
        RouterLink,
    ],
  templateUrl: './motorcycles.component.html',
  styleUrl: './motorcycles.component.sass'
})
export class MotorcyclesComponent implements OnInit{
    private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    public routeTitle: string | undefined;

    ngOnInit() {
        this.routeTitle = this.activatedRoute.snapshot.title;
    }

    protected readonly faPlus = faPlus;
}
