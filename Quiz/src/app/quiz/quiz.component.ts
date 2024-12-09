import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as data from '../../assets/questions.json';
import { QuizQuestion } from './quiz_question';
import { QcmCardComponent } from "./qcm-card/qcm-card.component";
import { OpenCardComponent } from "./open-card/open-card.component";
import { TfCardComponent } from "./tf-card/tf-card.component";
import { DataService } from '../quiz-service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  imports: [QcmCardComponent, OpenCardComponent, TfCardComponent]
})

export class QuizComponent {
  question: QuizQuestion | undefined;
  answered!:boolean;
  quizSegment:any;
  questionNumber!:number;
  theme:string="";

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams['answered']) {
        this.answered = queryParams['answered'] === 'true';
      }
    });
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams['theme']) {
        this.theme = queryParams['theme'];
      }
    });
    this.route.params.subscribe(params => {
      if (!params['id']) {
        this.questionNumber = -1;
      }
      else {
        this.questionNumber +=1;
        this.question = this.dataService.getSpecificQuestion(this.theme, +params['id']);
      }
    });
    console.log("dataservice : ");
    console.log(this.dataService);
  }

  start() {
    //this.dataService.initialize();
    this.onNext();
  }
  onNext() {
    this.quizSegment = this.dataService.getNewQuestionHash();
    //console.log("got quiz segment")
    this.router.navigate([`/quiz/${this.quizSegment[1]!.toString()}`], {
      queryParams: {theme:this.quizSegment[0], answered: false },
    });
  }
}