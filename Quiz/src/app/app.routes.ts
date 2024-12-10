import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { QuizCardComponent } from './quiz/quiz-card/quiz-card.component';

export const routes: Routes = [
  {
    path: 'quiz', component: QuizComponent, children: [
      { path: ':question-number', component: QuizCardComponent },
    ]
  },
  { path: 'quiz/:id', component: QuizComponent },
  { path: '', redirectTo: '/quiz/', pathMatch: 'full' },
];
