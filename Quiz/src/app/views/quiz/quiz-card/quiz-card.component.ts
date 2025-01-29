import { Component, computed, contentChild, inject, viewChild, viewChildren } from '@angular/core';
import { ChoiceBoxComponent } from './choice-box/choice-box.component';
import { ProgressService } from '../../../shared/services/progress-service';
import { DataService } from '../../../shared/services/quiz-service';
import { Answer } from '../../../shared/types/enums';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AnswerBoxComponent } from "./answer-box/answer-box.component";

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [ChoiceBoxComponent, ButtonModule, DialogModule, AnswerBoxComponent],
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.css'
})
export class QuizCardComponent {
  questionNumber: number = 0;
  answered = false;
  theme: string = "";
  dataService = inject(DataService);
  progressService = inject(ProgressService);
  answerType = Answer;
  dialogVisible = false;
  quiz_segment = this.dataService.current_segment;
  choiceBox = viewChild(ChoiceBoxComponent);

}

