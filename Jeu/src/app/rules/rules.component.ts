import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rules',
  imports: [],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css',
  standalone: true,
})
export class RulesComponent {

  constructor(private router: Router) { }
  continuer() {
    this.router.navigate(['./rules_analysis'])
  }
}
