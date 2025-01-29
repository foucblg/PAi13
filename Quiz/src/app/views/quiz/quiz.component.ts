import { Component, inject, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressService } from '../../shared/services/progress-service';
import { DataService } from '../../shared/services/quiz-service';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { QuizHomepageComponent } from './quiz-homepage/quiz-homepage.component';
import { QuizCardComponent } from './quiz-card/quiz-card.component';
import { DividerModule } from 'primeng/divider';
import { QuizEndpageComponent } from "./quiz-endpage/quiz-endpage.component";
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  imports: [CommonModule, ButtonModule, ToastModule, ProgressBarModule, QuizHomepageComponent, QuizCardComponent, DividerModule, QuizEndpageComponent]
})

export class QuizComponent {
  progressService = inject(ProgressService);
  dataService = inject(DataService);
  quizCard = viewChild(QuizCardComponent);

}
