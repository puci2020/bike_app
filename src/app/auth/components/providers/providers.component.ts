import {Component, Input} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faGoogle, faFacebookF, faTwitter} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [
    MatButtonModule,
    FaIconComponent
  ],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.sass'
})
export class ProvidersComponent {
  @Input({ required: true })
  authType!: string;

  protected readonly faGoogle = faGoogle;
  protected readonly faTwitter = faTwitter;
  protected readonly faFacebookF = faFacebookF;
}
