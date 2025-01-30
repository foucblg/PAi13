import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ActionBarComponent } from '../components/action-bar/action-bar.component';
@Component({
  selector: 'app-rules-solutions',
  imports: [ButtonModule, ActionBarComponent],
  templateUrl: './rules-solutions.component.html',
  styleUrl: './rules-solutions.component.css'
})
export class RulesSolutionsComponent {
  constructor(private router:Router) {}
        continuer(){
          this.router.navigate(['./rules_conclusion'])
        }
    
        actionButtons = [
          { label: 'Continuer', action: () => this.continuer() }
        ];
}
