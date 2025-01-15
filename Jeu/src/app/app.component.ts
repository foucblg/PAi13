import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    NavbarComponent,
    RouterOutlet,
    UserManagerComponent,
    TimerComponent
  ],
  standalone: true,
})
export class AppComponent {
  title = 'Jeu';
}
