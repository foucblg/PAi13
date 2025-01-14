import { Component } from '@angular/core';
import { NavigbuttonComponent } from "./navigbutton/navigbutton.component";
import { ThemeIndicatorComponent } from './theme-indicator/theme-indicator.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { navigation_data } from "../app.component";
import { NavigationCardComponent } from './navigation-card/navigation-card.component';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [NavigbuttonComponent,ThemeIndicatorComponent],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css', 
})

@Injectable({
  providedIn: 'root',
})

export class QuizzComponent {
  Catégorie = ["1","2","3","4","5"];
  catNumber=1; // Numéro de la catégorie, sera a récupérer avec la carte lors du passage 
            // a la prochaine carte. Dans la fonction changeCard du navigbutton?
  currentNumber = 1;
  numberOfcards: number = 2; // ????
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

export class NavigationComponents {
  
}


@Injectable({
  providedIn: "root",
})
export class QuestionnaireService {
  // Liste contenant 5 dictionnaires, 1 par catégorie 
  navigation_categories = [
    "Gestion de projet",
    "Expérience utilisateur",
    "Interface utilisateur",
    "Dévelopement",
    "Editorial"  
  ];

  ChangeCategories(n: number): any {
    if (this.navigation_categories[n] !== undefined) {
      return this.navigation_categories[n];
    } else {
      throw new Error("Invalid indices: Question or theme not found.");
    }
  }
}