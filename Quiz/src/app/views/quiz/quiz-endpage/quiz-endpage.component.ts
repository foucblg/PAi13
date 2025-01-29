import { Component, inject } from '@angular/core';
import { ProgressService } from '../../../shared/services/progress-service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-quiz-endpage',
  imports: [ButtonModule],
  templateUrl: './quiz-endpage.component.html',
  styleUrl: './quiz-endpage.component.css'
})
export class QuizEndpageComponent {
  progressService = inject(ProgressService);
}
