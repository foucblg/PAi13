import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as donnees from './assets/navigation_data.json';
import * as donnees2 from './assets/anwsers_data.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Jeu';
  title2 = 'quizz';
  navigation_data = navigation_data;
  navigation_data2 = navigation_data2;
}

export const navigation_data = donnees;
export const navigation_data2 = donnees2;