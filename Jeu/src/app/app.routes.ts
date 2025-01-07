import { Routes } from '@angular/router';
import { HomepageComponent} from './homepage/homepage.component'
import { ContexteComponent } from './contexte/contexte.component';

export const routes: Routes = [
    {path: 'jeu/homepage', component: HomepageComponent},
    {path: 'jeu/contexte', component: ContexteComponent},
    { path: '**',
        redirectTo: '/jeu/homepage',
        pathMatch: 'full'
      },
    

];
