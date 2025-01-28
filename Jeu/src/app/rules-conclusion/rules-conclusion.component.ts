import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-rules-conclusion',
  imports: [ButtonModule],
  templateUrl: './rules-conclusion.component.html',
  styleUrl: './rules-conclusion.component.css'
})
export class RulesConclusionComponent {
  constructor(private router:Router) {}
      continuer(){
        this.router.navigate(['./rules_repartition'])
      }
}
