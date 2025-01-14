import { Component, Input } from '@angular/core';
import { QuizSegment } from '../../../app.component';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-answer-box',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './answer-box.component.html',
  styleUrl: './answer-box.component.css'
})
export class AnswerBoxComponent {
  @Input() quiz_segment: QuizSegment | undefined;
  @Input() answered: boolean | undefined;
  @Input() answerForm: FormGroup | undefined;

  @Input("answerForm") set _answerForm(value: FormGroup) {
    this.answerForm = value;
    this.populateForm();
  }

  populateForm() {
    this.answerForm!.reset();
    if (this.quiz_segment!.question_type === "QCM") {
      this.quiz_segment!.possible_answers.forEach((_, n) => {
        this.answerForm!.addControl(n.toString(), new FormControl(false))
      });
    }
    else {
      this.answerForm?.addControl(this.quiz_segment!.question_type, new FormControl(''))
    }
  }
}
