import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { navigation_data } from '../../app.component';

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
  @Input() cat!: string
  @Output() cardChange = new EventEmitter<number>(); // Output to emit card changes
  @Output() catChange = new EventEmitter<string>();


  // Method to increment card number
  ChangeCard() {
    if (this.avance && this.currentNumber<10) {
      this.currentNumber += 1;
      this.cat = navigation_data.data[this.currentNumber]?.categorie;
    } else if (!this.avance && this.currentNumber >= 1 ) {
      this.currentNumber -= 1;
      this.cat = navigation_data.data[this.currentNumber]?.categorie;
      }
      else {
        this.cat = navigation_data.data[this.currentNumber]?.categorie;
      }

    this.cardChange.emit(this.currentNumber); // Emit updated card number to parent
    this.catChange.emit(this.cat);
  }

}
