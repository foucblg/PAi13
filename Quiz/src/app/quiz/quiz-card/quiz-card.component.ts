import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../quiz-service';
import { Question } from '../../app.component';
import { AnswerBoxComponent } from './answer-box/answer-box.component';


@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [AnswerBoxComponent],
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.css'
})
export class QuizCardComponent {
  question: Question | undefined;
  questionNumber: number = 0;
  answered = false;
  quizSegment: any;
  theme: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams['answered']) {
        this.answered = queryParams['answered'] === 'true';
      }
      if (queryParams['theme']) {
        this.theme = queryParams['theme'];
      }
      if (queryParams['theme_id']) {
        this.question = this.dataService.getSpecificQuestion(this.theme, +queryParams['theme_id']);
      }
    });
    this.route.params.subscribe(params => {
      if (params["question-number"]) {
        this.questionNumber = + params["question-number"];
      }
    })
  }

  answer() {
    console.log("Answering");
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { answered: true },
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      }
    );
  }

  goToNext() {
    this.dataService.next(this.router, this.questionNumber + 1);
  }
}
