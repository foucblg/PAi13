import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rules-conclusion',
  imports: [],
  templateUrl: './rules-conclusion.component.html',
  styleUrl: './rules-conclusion.component.css',
  standalone: true,
})
export class RulesConclusionComponent {
  constructor(private router: Router) { }
  continuer() {
    this.router.navigate(['./rules_repartition'])
  }
}
