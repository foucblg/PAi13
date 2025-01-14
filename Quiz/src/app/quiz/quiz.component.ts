import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../quiz-service';
import { ProgressService } from './progress-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  imports: [RouterOutlet, CommonModule],
})

export class QuizComponent {
  progressService = inject(ProgressService);
  dataService = inject(DataService);
  numberOfTopics: number;
  possibleNumberOfQuestionsPerTopic = [1, 2, 3];
  iNumberOfQuestions = 0;

  constructor(
  ) {
    this.numberOfTopics = this.dataService.getNumberOfTopics();
  }

  adjustNumberOfQuestions(c: number) {
    this.iNumberOfQuestions += c;
  }

}
