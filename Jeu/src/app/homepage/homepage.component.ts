import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  imports: [ButtonModule]
})
export class HomepageComponent {
  constructor(private router:Router) {}

  commencer(){
    this.router.navigate(['./contexte'])
  }

}
