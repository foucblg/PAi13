import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contexte',
  templateUrl: './contexte.component.html',
  styleUrl: './contexte.component.css',
  imports: [ButtonModule]
})
export class ContexteComponent {
  constructor(private router:Router) {}
  continuer(){
    this.router.navigate(['./rules'])
  }
}
