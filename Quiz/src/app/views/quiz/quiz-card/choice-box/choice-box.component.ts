import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuizSegment } from '../../../../shared/types/interfaces';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-choice-box',
  standalone: true,
  imports: [ReactiveFormsModule, RadioButtonModule, CheckboxModule],
  templateUrl: './choice-box.component.html',
  styleUrl: './choice-box.component.css'
})
export class ChoiceBoxComponent {
  @Input() quiz_segment: QuizSegment | undefined;
  @Input() answered: boolean | undefined;
  @Input() answerForm: FormGroup | undefined;

  @Input("answerForm") set _answerForm(value: FormGroup) {
    this.answerForm = value;
    this.populateForm();
  }

  populateForm() {
    console.log("reset");
    if (this.quiz_segment!.question_type === "QCM") {
      this.quiz_segment!.possible_answers.forEach((_, n) => {
        this.answerForm!.addControl(n.toString(), new FormControl(false))
      });
    }
    else {
      this.answerForm?.addControl(this.quiz_segment!.question_type, new FormControl(''))
    }
    this.answerForm!.reset();
    console.log(this.answerForm)
  }
}
