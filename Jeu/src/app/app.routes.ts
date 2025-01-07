import { Routes } from '@angular/router';
import { QuizzComponent } from './quizz/quizz.component';
import { NavigbuttonComponent } from './quizz/navigbutton/navigbutton.component';
import { ProgressbarComponent } from './quizz/progressbar/progressbar.component';
import { ThemeIndicatorComponent } from './quizz/theme-indicator/theme-indicator.component';

export const routes: Routes = [
    {path:'quizz', component: QuizzComponent, children: [
        { path: '', redirectTo: '0', pathMatch: 'full' },
    ]
    },
];
