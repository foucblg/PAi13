import { Component } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-rules-solutions',
  imports: [],
  templateUrl: './rules-solutions.component.html',
  styleUrl: './rules-solutions.component.css'
})
export class RulesSolutionsComponent {
  constructor(private router:Router) {}
        continuer(){
          this.router.navigate(['./rules_conclusion'])
        }
}
