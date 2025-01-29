import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ActionBarComponent } from "../components/action-bar/action-bar.component";

@Component({
  selector: 'app-rules',
  imports: [ButtonModule, ActionBarComponent],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css'
})
export class RulesComponent {

    constructor(private router:Router) {}
    continuer(){
      this.router.navigate(['./rules_analysis'])
    }

    actionButtons = [
      { label: 'Continuer', action: () => this.continuer(), icon: 'pi pi-arrow-right' }
    ];
}
