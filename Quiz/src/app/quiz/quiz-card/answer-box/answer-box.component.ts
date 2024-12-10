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
  qcmForm = new FormGroup({});
  @Input() quiz_segment: QuizSegment | undefined;
  @Input() answered: boolean | undefined;


  @Input("quiz_segment") set segment(quiz_segment: QuizSegment) {
    this.quiz_segment = quiz_segment;
    this.quiz_segment?.choices.forEach((_, n) => {
      this.qcmForm.addControl(n.toString(), new FormControl(false))
    });
  }

  answer() {
    console.log(this.qcmForm.value)
  }
}
