import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css'
})
export class RulesComponent {

    constructor(private router:Router) {}
    continuer(){
      this.router.navigate(['./rules_analysis'])
    }
}
