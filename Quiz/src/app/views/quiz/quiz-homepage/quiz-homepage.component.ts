import { Component, inject } from '@angular/core';
import { ProgressService } from '../../../shared/services/progress-service';
import { DataService } from '../../../shared/services/quiz-service';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { InputNumberModule } from 'primeng/inputnumber';
import { BlockUIModule } from 'primeng/blockui';
import { ImageModule } from 'primeng/image';


@Component({
  selector: 'app-quiz-homepage',
  imports: [ButtonModule, DividerModule, PanelModule, InputNumberModule, BlockUIModule, ImageModule],
  templateUrl: './quiz-homepage.component.html',
  styleUrl: './quiz-homepage.component.css'
})
export class QuizHomepageComponent {
  progressService = inject(ProgressService);
  dataService = inject(DataService);
  numberOfTopics: number;
  possibleNumberOfQuestionsPerTopic = [1, 2, 3];
  iNumberOfQuestions = 0;

  constructor(
  ) {
    this.numberOfTopics = this.dataService.getNumberOfTopics();
    this.progressService.goToBegining();
  }

  adjustNumberOfQuestions(c: number) {
    this.iNumberOfQuestions += c;
  }
}
