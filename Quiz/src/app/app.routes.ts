import { Routes } from '@angular/router';
import { QuizComponent } from './views/quiz/quiz.component';
import { QuizCardComponent } from './views/quiz/quiz-card/quiz-card.component';

export const routes: Routes = [
  {
    path: 'quiz', children: [
      { path: '**', component: QuizComponent },
    ],
  },
  { path: '', redirectTo: 'quiz/accueil', pathMatch: 'full' },
];
