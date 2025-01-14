import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'navigation-card',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './navigation-card.component.html',
  styleUrl: './navigation-card.component.css'
})

export class NavigationCardComponent {
  @Input() card_number!: number;
  @Output() answer = new EventEmitter<boolean>();
  card_answer = false;
  texte = [{
        "categorie": "Expérience utilisateur",
        "nom": "Immersion",
        "question": "Travailler vous avec vos différents utilisateurs ?"
    },
    {
        "categorie": "Gestion de projet",
        "nom": "Equipe projet et partenariats",
        "question": "Avez vous prévu des ressources (personne référente, formation, mobilisation d'experts...) pour favoriser l'inclusivité de votre projet ?"
    }
];

  onAnswer(answer: boolean) {
    this.card_answer = answer
  }
}