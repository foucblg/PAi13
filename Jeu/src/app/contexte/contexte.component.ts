import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-contexte',
  templateUrl: './contexte.component.html',
  styleUrl: './contexte.component.css',
  standalone: false
})
export class ContexteComponent {
  constructor(private router:Router) {}
  continuer(){
    this.router.navigate(['./rules'])
  }
}
