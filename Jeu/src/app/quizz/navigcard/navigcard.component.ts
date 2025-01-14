import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { navigation_data } from '../../app.component';

@Component({
  selector: 'app-navigcard',
  standalone: true,
  imports: [],
  templateUrl: './navigcard.component.html',
  styleUrl: './navigcard.component.css'
})
export class NavigcardComponent {
  @Input() card_number!: number;
  @Output() answer = new EventEmitter<boolean>();
  card_answer = false;
  Navdata=navigation_data;

  onAnswer(answer: boolean) {
    this.card_answer = answer
  }
}
