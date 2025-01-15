import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProgressService } from '../../shared/services/progress-service';
import { DataService } from '../../shared/services/quiz-service';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { QuizHomepageComponent } from './quiz-homepage/quiz-homepage.component';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  imports: [RouterOutlet, CommonModule, ButtonModule, ToastModule, ProgressBarModule, QuizHomepageComponent]
})

export class QuizComponent {
  progressService = inject(ProgressService);
  dataService = inject(DataService);

}
