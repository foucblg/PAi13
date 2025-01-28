import { Routes } from '@angular/router';
import { QuizzComponent } from './quizz/quizz.component';
import { NavigbuttonComponent } from './quizz/navigbutton/navigbutton.component';
import { ProgressbarComponent } from './quizz/progressbar/progressbar.component';
import { ThemeIndicatorComponent } from './quizz/theme-indicator/theme-indicator.component';
import { SolutionsComponent } from './solutions/solutions.component';

export const routes: Routes = [
    {path:'quizz', component: QuizzComponent, children: [
        { path: 'quizz', redirectTo: '0', pathMatch: 'full' }
    ]
    },
    {path:'solutions', component: SolutionsComponent, children: [
      //{ path: 'solutions', redirectTo: '0', pathMatch: 'full' }
  ]
  },
  {path:'solution_2', component: SolutionsComponent, children: [
    { path: 'solutions', redirectTo: '0', pathMatch: 'full' }
]
},
{path:'solution_1', component: SolutionsComponent, children: [
  { path: 'solutions', redirectTo: '0', pathMatch: 'full' }
]
},
{path:'solution_3', component: SolutionsComponent, children: [
  { path: 'solutions', redirectTo: '0', pathMatch: 'full' }
]
},
{path:'solution_4', component: SolutionsComponent, children: [
  { path: 'solutions', redirectTo: '0', pathMatch: 'full' }
]
},
{path:'solution_5', component: SolutionsComponent, children: [
{ path: 'solutions', redirectTo: '0', pathMatch: 'full' }
]
},
{path:'solution_6', component: SolutionsComponent, children: [
{ path: 'solutions', redirectTo: '0', pathMatch: 'full' }
]
},
{path:'solution_7', component: SolutionsComponent, children: [
  { path: 'solutions', redirectTo: '0', pathMatch: 'full' }
]
},
{path:'solution_8', component: SolutionsComponent, children: [
{ path: 'solutions', redirectTo: '0', pathMatch: 'full' }
]
},
{path:'solution_9', component: SolutionsComponent, children: [
{ path: 'solutions', redirectTo: '0', pathMatch: 'full' }
]
},
{path:'solution_10', component: SolutionsComponent, children: [
  { path: 'solutions', redirectTo: '0', pathMatch: 'full' }
]
},
{path:'solution_11', component: SolutionsComponent, children: [
{ path: 'solutions', redirectTo: '0', pathMatch: 'full' }
]
},
{path:'solution_0', component: SolutionsComponent, children: [
  { path: 'solutions', redirectTo: '0', pathMatch: 'full' }
]
},
];
