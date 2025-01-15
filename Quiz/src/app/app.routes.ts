import { Routes } from '@angular/router';
import { QuizComponent } from './views/quiz/quiz.component';
import { QuizCardComponent } from './views/quiz/quiz-card/quiz-card.component';

export const routes: Routes = [
  {
    path: 'quiz', component: QuizComponent, children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      // { path: 'end', component: QuizCardComponent },
      { path: ':question-number', component: QuizCardComponent },
    ]
  },
  { path: '', redirectTo: 'quiz/accueil', pathMatch: 'full' },
];
