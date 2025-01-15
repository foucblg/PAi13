import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-rules-analysis',
  imports: [],
  templateUrl: './rules-analysis.component.html',
  styleUrl: './rules-analysis.component.css'
})
export class RulesAnalysisComponent {
  constructor(private router:Router) {}
      continuer(){
        this.router.navigate(['./rules_solutions'])
      }
}
