import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './open-card.component.html',
  styleUrl: './open-card.component.css'
})
export class OpenCardComponent {
  @Input() questionNumber!: number;
  @Input() answered!: boolean;
  @Input() question!: any;
  @Output() answeredChange = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  salut(){
    alert('salut');
  }
  onAnswer() {
    this.router.navigate([], {
      queryParams: { answered: true },
      queryParamsHandling: 'merge' // Fusionne avec les query params existants
    });
  }
}