import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-qcm-card',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './qcm-card.component.html',
  styleUrl: './qcm-card.component.css'
})
export class QcmCardComponent {
  @Input() questionNumber!: number;
  @Input() answered!: boolean;
  @Input() cardContent!: any;
  @Output() answeredChange = new EventEmitter<boolean>();
  answer: string ="";
  choiceNames = "ABCDEFGH";
  answerForm = new FormGroup({
    answer: new FormControl(''),
  });

  onAnswer() {
    if (typeof this.answerForm.value.answer === "number") {
      this.answeredChange.emit(!this.answered);
      this.answer = this.answerForm.value.answer;
    }
  }
}