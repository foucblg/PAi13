import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ActionBarComponent } from '../components/action-bar/action-bar.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  imports: [ButtonModule, ActionBarComponent]
})
export class HomepageComponent {
  constructor(private router:Router) {}

  commencer(){
    this.router.navigate(['./contexte'])
  }

  actionButtons = [
    { label: 'Suivant', action: () => this.commencer(), icon: 'pi pi-arrow-right' }
  ];

}
