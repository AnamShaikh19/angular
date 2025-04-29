import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'hero', component:HeroComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'contact', component: ContactComponent},

  {path: 'footer', component: FooterComponent}
];
