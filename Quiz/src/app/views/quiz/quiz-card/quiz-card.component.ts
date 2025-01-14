import { Component, inject } from '@angular/core';
import { AnswerBoxComponent } from './answer-box/answer-box.component';
import { FormGroup } from '@angular/forms';
import { ProgressService } from '../../../shared/services/progress-service';
import { DataService } from '../../../shared/services/quiz-service';
import { QuizSegment } from '../../../shared/types/interfaces';
import { Answer } from '../../../shared/types/enums';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-quiz-card',
  imports: [AnswerBoxComponent, ButtonModule],
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
  answerType = Answer;
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

  verifyAnswer(): Answer {
    const userAnswers = this.getAnswer();
    const realAnswers: number[] = this.quiz_segment!.true_answers;
    if (Object.keys(userAnswers).length === 0) {
      return Answer.Empty;
    }

    for (let index = 0; index < this.quiz_segment!.possible_answers.length; index++) {
      const indexIsAnswer = realAnswers.includes(index);
      if (indexIsAnswer !== Boolean(userAnswers[index])) { // logical XOR
        return Answer.False;
      }
    }
    return Answer.True;
  }

}

