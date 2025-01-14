import { Component, Injectable } from '@angular/core';
import { NavigationCardComponent } from './navigation-card/navigation-card.component';

@Component({
  selector: 'navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  imports: [NavigationCardComponent]
})

@Injectable({
  providedIn: 'root',
})

export class NavigationComponents {
  card_number = 0;
  numberOfcards: number = 2;
  suivant = false;

  onNext() {
    this.suivant = false;
    this.advance();
  }

  start() {
    this.advance();
  }

  advance() {
    this.card_number++;
  }
}