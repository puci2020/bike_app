import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ActivatedRoute,
    RouteConfigLoadStart,
    Router,
    RouterOutlet
} from '@angular/router';
import {LoadingSpinnerComponent} from "./shared/components/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, RouterOutlet, LoadingSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent{
  title: string = 'bike_app';
  loading: boolean = false;
  private router: Router = inject(Router);
  private activateRoute: ActivatedRoute = inject(ActivatedRoute);

    constructor() {
        this.router.events.subscribe(
            (event) => {
                if(event instanceof RouteConfigLoadStart)
                    this.loading = true;
                else
                    this.loading = false;
            }
        )
    }

}
