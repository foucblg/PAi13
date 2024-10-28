import { Component, inject } from '@angular/core';
import { QcmCardComponent } from './qcm-card/qcm-card.component';
import { DataService } from './quiz-service';
import { OpenCardComponent } from "./open-card/open-card.component";
import { TfCardComponent } from './tf-card/tf-card.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QcmCardComponent, OpenCardComponent, TfCardComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})

export class QuizComponent {
  dataService = inject(DataService);
  questionNumber = -1;
  answered = false;
  cardContent: any = undefined;
  numberOfQuestions: number = this.dataService.getNumberOfQuestions();

  onNext() {
    this.answered = false;
    this.advance();
  }

  start() {
    this.advance();
  }
  
  advance() {
    this.questionNumber++;
    this.cardContent = this.dataService.getQuestion(this.questionNumber); 
  }

}
