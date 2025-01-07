import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigbutton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigbutton.component.html',
  styleUrls: ['./navigbutton.component.css']
})
export class NavigbuttonComponent {
  @Input() avance!: boolean;
  @Input() currentNumber: number = 0 // Input to control navigation
  @Output() cardChange = new EventEmitter<number>(); // Output to emit card changes


  // Method to increment card number
  ChangeCard  () {
    if (this.avance==true) {
    this.currentNumber += 1;
    this.cardChange.emit(this.currentNumber); // Emit updated card number to parent
  }
    else {
      if (this.currentNumber > 0) {
        this.currentNumber -= 1;
        this.cardChange.emit(this.currentNumber); // Emit updated card number to parent
      }
    }
  }

}
