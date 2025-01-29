import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent
]
})
export class AppComponent {
  title = 'Jeu';
}
