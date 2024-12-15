import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { DataService } from '../quiz-service';
import { ScoreService } from './score-service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  imports: [RouterOutlet],
})

export class QuizComponent {
  questionNumber = 0;
  answered = false;
  hasEnded = false;
  scoreService = inject(ScoreService);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {
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

  start() {
    console.log("Game starting", this.questionNumber);
    this.dataService.next(this.router, this.questionNumber + 1);
  }
}
