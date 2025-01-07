import { Routes } from '@angular/router';
import { HomepageComponent} from './homepage/homepage.component'
import { ContexteComponent } from './contexte/contexte.component';

export const routes: Routes = [
    {path: 'homepage', component: HomepageComponent},
    {path: 'contexte', component: ContexteComponent},
    { path: '**',
        redirectTo: 'homepage',
        pathMatch: 'full'
      },
    

];
