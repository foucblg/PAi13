import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../quiz-service';
import { QuizSegment } from '../../app.component';
import { AnswerBoxComponent } from './answer-box/answer-box.component';
import { FormGroup } from '@angular/forms';
import { ScoreService } from '../score-service';


@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [AnswerBoxComponent],
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.css'
})
export class QuizCardComponent {
  quiz_segment: QuizSegment | undefined;
  questionNumber: number = 0;
  answered = false;
  theme: string = "";
  answerForm = new FormGroup({});
  scoreService = inject(ScoreService);



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
        this.quiz_segment = this.dataService.getSpecificQuestion(this.theme, +queryParams['theme_id']);
      }
    });
    this.route.params.subscribe(params => {
      if (params["question-number"]) {
        this.questionNumber = + params["question-number"];
      }
    })
  }



  answer() {
    switch (this.verifyAnswer()) {
      case "true":
        this.scoreService.addToScore(1);
        break;

      case "empty":
        alert("Choisir au moins une réponse");
        return;
    }
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

  getAnswer() {
    if (this.quiz_segment!.question_type === "QCM") {
      return Object.fromEntries(
        Object.entries(this.answerForm.value).filter(([_, value]) => value === true)
      );
    } else if (this.quiz_segment!.question_type === "QCU") {
      const key = this.answerForm.get('QCU')!.value;
      if (key != null) {
        return { [key]: true };
      }
    }
    return {};
  }

  verifyAnswer() {
    const userAnswers = this.getAnswer();
    const realAnswers: number[] = this.quiz_segment!.answers;
    if (Object.keys(userAnswers).length === 0) {
      return "empty"
    }

    for (let index = 0; index < this.quiz_segment!.choices.length; index++) {
      const indexIsAnswer = realAnswers.includes(index);
      if (indexIsAnswer !== Boolean(userAnswers[index])) { // logical XOR
        return "false";
      }
    }
    return "true";
  }

}

