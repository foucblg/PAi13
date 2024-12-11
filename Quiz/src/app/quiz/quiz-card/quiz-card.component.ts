import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../quiz-service';
import { QuizSegment } from '../../app.component';
import { AnswerBoxComponent } from './answer-box/answer-box.component';
import { FormGroup } from '@angular/forms';


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
    console.log(this.getAnswer());
    console.log(this.arrayToObj(this.quiz_segment!.answers));
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { answered: true },
        queryParamsHandling: 'merge', // remove to replace all query params by provided
        skipLocationChange: true,
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
    } else {
      const key = this.answerForm.value[this.quiz_segment!.question_type as keyof Partial<{}>];
      return { [key]: true };
    }
  }

  verifyAnswer() {
    return this.shallowEqual(this.getAnswer(), this.arrayToObj(this.quiz_segment!.answers))
  }


  arrayToObj(array: any[]) {
    return array.reduce((acc, i) => ({ ...acc, [i]: true }), {});
  }

  shallowEqual<T extends Record<string, any>>(obj1: T, obj2: T): boolean {
    if (obj1 === obj2) {
      return true;
    }
    if (!obj1 || !obj2) {
      return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  }
}

