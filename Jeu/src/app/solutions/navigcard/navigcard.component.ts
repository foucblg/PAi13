import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { navigation_data_solutions } from '../../app.component';
import {Router } from '@angular/router';


@Component({
  selector: 'app-navigation-card',
  standalone: true,
  imports: [],
  templateUrl: './navigcard.component.html',
  styleUrl: './navigcard.component.css'
})
export class NavigcardComponent {
  constructor(private router:Router) {}
  @Input() card_number!: number;
  @Output() answer = new EventEmitter<boolean>();
  card_answer = false;
  Navdata=navigation_data_solutions;
  updateQueryParams(): void {
    this.router.navigate([], {
      queryParams: { awnsered: ''+this.card_answer },
      queryParamsHandling: 'merge', // Merge avec les paramètres existants
      skipLocationChange: false // Mettre à jour l'URL dans la barre d'adresse
    });
  }
  onAnswer(answer: boolean) {
    this.card_answer = answer
    this.updateQueryParams();
  }
}
