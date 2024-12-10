import { Component, Input } from '@angular/core';
import { QuizSegment } from '../../../app.component';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-answer-box',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './answer-box.component.html',
  styleUrl: './answer-box.component.css'
})
export class AnswerBoxComponent {
  @Input() quiz_segment: QuizSegment | undefined;
  @Input() answered : boolean | undefined;
  qcmForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.qcmForm = this.fb.group({
      choices: this.fb.array([]),
    });
  }

  ngOnInit() {
    if (this.quiz_segment) {
      this.addChoices();
    }
  }

  get choices(): FormArray {
    return this.qcmForm.get('choices') as FormArray;
  }

  private addChoices() {
    this.quiz_segment?.choices.forEach(() => {
      this.choices.push(this.fb.control(false)); 
    });
  }
} 