import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './componentes/pages/home/home.component';
import { AboutMeComponent } from './componentes/pages/about-me/about-me.component';
import { LoginComponent } from './componentes/pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HomeComponent, AboutMeComponent, LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp-danielvizgarralivon';
}
