import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QcmCardComponent } from "./qcm-card/qcm-card.component";
import { OpenCardComponent } from "./open-card/open-card.component";
import { TfCardComponent } from "./tf-card/tf-card.component";
import { DataService } from '../quiz-service';
import { Question } from '../app.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  imports: [QcmCardComponent, OpenCardComponent, TfCardComponent]
})

export class QuizComponent {
  question: Question | undefined;
  answered = false;
  quizSegment: any;
  questionNumber = 0;
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
      console.log(params);
      if (params['id']) {
        this.questionNumber = + params['id'];
      }
    })
    console.log("dataservice : ");
    console.log(this.dataService);
  }

  start() {
    this.onNext();
  }
  onNext() {
    this.quizSegment = this.dataService.getNewQuestionHash();
    //console.log("got quiz segment")
    this.questionNumber++;
    this.router.navigate([`/quiz/${this.questionNumber.toString()}`], {
      queryParams: { theme: this.quizSegment[0], theme_id: this.quizSegment[1], answered: false },
    });
  }
}
