import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { QuizCardComponent } from './quiz/quiz-card/quiz-card.component';

export const routes: Routes = [
  {
    path: 'quiz', component: QuizComponent, children: [
      { path: ':id', component: QuizCardComponent },
    ]
  },
  { path: 'quiz/:id', component: QuizComponent },
  { path: '', redirectTo: '/quiz/start', pathMatch: 'full' },
];
