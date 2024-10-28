import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

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
  @Input() cardContent!: any;
  @Output() answeredChange = new EventEmitter<boolean>();
  answer = false;
  answerForm = new FormGroup({
    answer: new FormControl(''),
  });

  onAnswer() {
    if (typeof this.answerForm.value.answer === "boolean") {
      this.answeredChange.emit(!this.answered);
      this.answer = this.answerForm.value.answer;
    }
  }
}