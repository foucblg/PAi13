import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-contexte',
  standalone: true,
  imports: [],
  templateUrl: './contexte.component.html',
  styleUrl: './contexte.component.css'
})
export class ContexteComponent {
  constructor(private router:Router) {}
  continuer(){
    this.router.navigate(['./rules'])
  }
}
