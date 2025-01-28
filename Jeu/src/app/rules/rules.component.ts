import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-rules',
  imports: [ButtonModule],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css'
})
export class RulesComponent {

    constructor(private router:Router) {}
    continuer(){
      this.router.navigate(['./rules_analysis'])
    }
}
