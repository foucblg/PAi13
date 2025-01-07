import { Component } from '@angular/core';
import { NavigbuttonComponent } from "./navigbutton/navigbutton.component";
import { ThemeIndicatorComponent } from './theme-indicator/theme-indicator.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [NavigbuttonComponent,ThemeIndicatorComponent],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
  currentNumber=1; // Numéro de la carte
  Catégorie = ["1","2","3","4","5"];
  catNumber=1; // Numéro de la catégorie, sera a récupérer avec la carte lors du passage 
            // a la prochaine carte. Dans la fonction changeCard du navigbutton?
}
