import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() cardContent!: any;
  @Output() answeredChange = new EventEmitter<boolean>();

  onAnswer() {
      this.answeredChange.emit(!this.answered);
  }
}