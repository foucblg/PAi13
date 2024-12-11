import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../quiz-service';
import { QuizSegment } from '../../app.component';
import { AnswerBoxComponent } from './answer-box/answer-box.component';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


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
    this.quiz_segment?.choices.forEach((_, n) => {
      this.answerForm?.addControl(n.toString(), new FormControl(false))
    });
  }

  answer() {
    console.log(this.getAnswer(this.answerForm));
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { answered: true },
        queryParamsHandling: 'merge', // remove to replace all query params by provided
        skipLocationChange: true,
      }
    );
    this.answerForm.reset();
  }

  getAnswer(answerForm : FormGroup) {
    const trueIndices = Object.entries(answerForm.value)
      .filter(([key, value]) => value === true)
      .map(([key]) => Number(key)); 
    return trueIndices;
  }

  arraysAreEqual<T>(arr1: T[], arr2: T[]): boolean {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((value, index) => value === arr2[index]);
  }

  goToNext() {
    this.dataService.next(this.router, this.questionNumber + 1);
  }
}
