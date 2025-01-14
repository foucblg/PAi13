import { Component, inject } from '@angular/core';
import { DataService } from '../../quiz-service';
import { QuizSegment } from '../../app.component';
import { AnswerBoxComponent } from './answer-box/answer-box.component';
import { FormGroup } from '@angular/forms';
import { ProgressService } from '../progress-service';


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
  dataService = inject(DataService);
  progressService = inject(ProgressService);

  ngOnInit() {
    this.quiz_segment = this.dataService.getSpecificQuestion(this.progressService.theme(), this.progressService.theme_id());
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
    const realAnswers: number[] = this.quiz_segment!.true_answers;
    if (Object.keys(userAnswers).length === 0) {
      return "empty"
    }

    for (let index = 0; index < this.quiz_segment!.possible_answers.length; index++) {
      const indexIsAnswer = realAnswers.includes(index);
      if (indexIsAnswer !== Boolean(userAnswers[index])) { // logical XOR
        return "false";
      }
    }
    return "true";
  }

}

