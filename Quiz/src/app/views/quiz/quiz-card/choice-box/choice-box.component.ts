import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressService } from '../../../../shared/services/progress-service';
import { DataService } from '../../../../shared/services/quiz-service';

@Component({
  selector: 'app-choice-box',
  standalone: true,
  imports: [ReactiveFormsModule, RadioButtonModule, CheckboxModule],
  templateUrl: './choice-box.component.html',
  styleUrl: './choice-box.component.css'
})
export class ChoiceBoxComponent {
  @Input() answered: boolean | undefined;
  answerForm = new FormGroup({});
  progressService = inject(ProgressService);
  dataService = inject(DataService);
  quiz_segment = this.dataService.current_segment;

  ngOnInit() {
    console.log(this.progressService.currentAnswer());
    if (this.quiz_segment()!.question_type === "QCM") {
      this.quiz_segment()!.possible_answers.forEach((_, n) => {
        this.answerForm!.addControl(n.toString(), new FormControl(false))
      });
    }
    else {
      this.answerForm?.addControl(this.quiz_segment()!.question_type, new FormControl(''))
    }
    this.answerForm!.reset();
    console.log(this.answerForm);
  }

  ngOnDestroy() {
    if (this.quiz_segment()?.question_type === "QCM") {
      this.progressService.currentAnswer.set(Object.fromEntries(
        Object.entries(this.answerForm.value).filter(([_, value]) => value === true)
      ));
      return
    } else if (this.quiz_segment()?.question_type === "QCU") {
      console.log()
      const key = this.answerForm.get('QCU')!.value;
      if (key != null) {
        this.progressService.currentAnswer.set({ [key]: true });
        return
      }
    }
    this.progressService.currentAnswer.set({});
  }
}
