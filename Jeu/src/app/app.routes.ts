import { Routes } from '@angular/router';
import { InclusifCardsComponent } from './inclusif-cards/inclusif-cards.component';
import { NavigationCardComponent } from './inclusif-cards/navigation-card/navigation-card.component';
import { SolutionsComponent } from './solutions/solutions.component';

export const routes: Routes = [
  {
    path: 'cartes_inclusif',
    component: InclusifCardsComponent,
    children: [
      { path: '', redirectTo: 'carte', pathMatch: 'full' }, // Redirection vers carte avec query params
      {
        path: 'carte',
        component: NavigationCardComponent,  // Le composant NavigcardComponent reste ici
      },
      { path: '**', redirectTo: 'cartes_inclusif' }  // Rediriger les routes invalides
    ]
  },
  {path:'solutions', component:SolutionsComponent,children : [
    { path: '', redirectTo: '0', pathMatch: 'full' }
  ]}
];
