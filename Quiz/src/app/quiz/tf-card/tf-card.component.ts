import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tf-card',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './tf-card.component.html',
  styleUrl: './tf-card.component.css'
})
export class TfCardComponent {
  @Input() questionNumber!: number;
  @Input() answered!: boolean;
  @Input() question!: any;
  @Output() answeredChange = new EventEmitter<boolean>();
  answer = false;
  answerForm = new FormGroup({
    answer: new FormControl(''),
  });

  constructor(private router: Router) {}

  onAnswer() {
    if (typeof this.answerForm.value.answer === "boolean") {
      this.answer = this.answerForm.value.answer;
      this.router.navigate([], {
      queryParams: { answered: true },
      queryParamsHandling: 'merge' // Fusionne avec les query params existants
    });
    }
  }
}