import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProgressService } from '../../shared/services/progress-service';
import { DataService } from '../../shared/services/quiz-service';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  imports: [RouterOutlet, CommonModule, ButtonModule, ToastModule, ProgressBarModule]
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
    this.progressService.goToBegining();
  }

  adjustNumberOfQuestions(c: number) {
    this.iNumberOfQuestions += c;
  }

}
