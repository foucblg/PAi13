import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { DataService } from '../quiz-service';

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
      console.log(params);
      if (params['question-number']) {
        console.log(+ params["question-number"]);
        this.questionNumber = + params['question-number'];
      }
    })
  }

  start() {
    console.log("Game starting");
    this.dataService.next(this.router, this.questionNumber + 1);
  }
}
