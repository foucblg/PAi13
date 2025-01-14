import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { DataService } from '../quiz-service';
import { ScoreService } from './score-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  imports: [RouterOutlet, CommonModule],
})

export class QuizComponent {
  questionNumber = 0;
  answered = false;
  hasEnded = false;
  scoreService = inject(ScoreService);
  dataService = inject(DataService);
  numberOfTopics: number;
  possibleNumberOfQuestionsPerTopic = [1, 2, 3];
  iNumberOfQuestions = 0;
  progressRatio = computed(() => this.dataService.questionNumber() / this.possibleNumberOfQuestionsPerTopic[this.iNumberOfQuestions] / this.numberOfTopics)

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.numberOfTopics = this.dataService.getNumberOfTopics();
    this.route.firstChild?.queryParams.subscribe(queryParams => {
      if (queryParams['answered']) {
        this.answered = queryParams['answered'] === 'true';
      }
    });
    this.route.firstChild?.params.subscribe(params => {
      if (params["question-number"] === "end") {
        this.hasEnded = true;
      } else if (params['question-number']) {
        this.hasEnded = false;
        console.log(+ params["question-number"]);
        this.questionNumber = + params['question-number'];
      }
    })
  }

  calculateProgressPercentage() {

  }

  adjustNumberOfQuestions(c: number) {
    this.iNumberOfQuestions += c;
  }

  start() {
    this.dataService.startQuiz(this.possibleNumberOfQuestionsPerTopic[this.iNumberOfQuestions]);
    this.dataService.next(this.router);
  }

  goToBegining() {
    this.questionNumber = 0;
    this.scoreService.resetScore();
    this.router.navigate(["quiz", "0"]);
  }
}
