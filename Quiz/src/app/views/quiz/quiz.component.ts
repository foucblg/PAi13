import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProgressService } from '../../shared/services/progress-service';
import { DataService } from '../../shared/services/quiz-service';

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
