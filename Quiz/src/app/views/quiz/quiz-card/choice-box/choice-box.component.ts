import { Component, inject, input, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuizSegment } from '../../../../shared/types/interfaces';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressService } from '../../../../shared/services/progress-service';

@Component({
  selector: 'app-choice-box',
  standalone: true,
  imports: [ReactiveFormsModule, RadioButtonModule, CheckboxModule],
  templateUrl: './choice-box.component.html',
  styleUrl: './choice-box.component.css'
})
export class ChoiceBoxComponent {
  quiz_segment = input<QuizSegment>();
  @Input() answered: boolean | undefined;
  answerForm = new FormGroup({});
  progressService = inject(ProgressService);

  ngOnInit() {
    if (this.quiz_segment()!.question_type === "QCM") {
      this.quiz_segment()!.possible_answers.forEach((_, n) => {
        this.answerForm!.addControl(n.toString(), new FormControl(false))
      });
    }
    else {
      this.answerForm?.addControl(this.quiz_segment()!.question_type, new FormControl(''))
    }
    this.answerForm!.reset();
  }

  ngOnDestroy() {
    if (this.quiz_segment()?.question_type === "QCM") {
      this.progressService.currentAnswer.set(Object.fromEntries(
        Object.entries(this.answerForm.value).filter(([_, value]) => value === true)
      ));
    } else if (this.quiz_segment()?.question_type === "QCU") {
      const key = this.answerForm.get('QCU')!.value;
      if (key != null) {
        this.progressService.currentAnswer.set({ [key]: true });
      }
    }
    this.progressService.currentAnswer.set({});
  }
}
