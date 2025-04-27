import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, AboutComponent, ServicesComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
