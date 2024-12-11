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
  @Input() qcmForm :FormGroup | undefined ;
}
