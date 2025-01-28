import { Routes } from '@angular/router';
import { QuizzComponent } from './quizz/quizz.component';
import { NavigcardComponent } from './quizz/navigcard/navigcard.component';

export const routes: Routes = [
  {
    path: 'cartes_inclusif',
    component: QuizzComponent,
    children: [
      { path: '', redirectTo: 'carte', pathMatch: 'full' }, // Redirection vers carte avec query params
      {
        path: 'carte',
        component: NavigcardComponent,  // Le composant NavigcardComponent reste ici
      },
      { path: '**', redirectTo: 'cartes_inclusif' }  // Rediriger les routes invalides
    ]
  }
];
