import { Component, inject, input } from "@angular/core";
import { DataService } from "../../../../shared/services/quiz-service";
import { ProgressService } from "../../../../shared/services/progress-service";
import { QuizSegment } from "../../../../shared/types/interfaces";
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-answer-box',
  imports: [ReactiveFormsModule, RadioButtonModule, CheckboxModule],
  templateUrl: './answer-box.component.html',
  styleUrl: './answer-box.component.css'
})
export class AnswerBoxComponent {
  dataService = inject(DataService);
  progressService = inject(ProgressService);
  quiz_segment = input<QuizSegment>();
  answerForm = input<FormGroup>();
}

