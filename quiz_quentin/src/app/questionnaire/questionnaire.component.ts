import { Component, inject  } from '@angular/core';
import { questionnaireservice } from './questionnaire-service'
import { QuestCardComponent } from './cartes/quest-card.component';

@Component({
  selector: 'questionnaire-card',
  standalone: true,
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css',
  imports: [QuestCardComponent]
})

export class questionnaireComponents {
  dataService = inject(questionnaireservice);
  categoryNumber = -1;
  answered = false;
  cardContent: any = undefined;
  numberOfQuestions: number = this.dataService.getNumberOfQuestions();

  onNext() {
    this.answered = false;
    this.advance();
  }

  start() {
    this.advance();
  }
  
  advance() {
    this.categoryNumber++;
    this.cardContent = this.dataService.getQuestion(this.categoryNumber); 
  }

}