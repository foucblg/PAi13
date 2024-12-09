import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
  { path: 'quiz/start', component: QuizComponent },
  { path: 'quiz/:id', component: QuizComponent },
  { path: '', redirectTo: '/quiz/start', pathMatch: 'full' },
];
