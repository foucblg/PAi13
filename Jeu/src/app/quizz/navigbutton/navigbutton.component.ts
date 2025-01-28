import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CardnumService } from '../cardnum.service';
import { navigation_data } from '../../app.component';
import { navigation_data2 } from '../../app.component';
import {Router } from '@angular/router';

@Component({
  selector: 'app-navigbutton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigbutton.component.html',
  styleUrls: ['./navigbutton.component.css']
})
export class NavigbuttonComponent {
  constructor(private router:Router) {}
  @Input() avance!: boolean;
  @Input() currentNumber: number = 0; // Input to control navigation
  @Input() cat!: string;
  @Output() cardChange = new EventEmitter<number>(); // Output to emit card changes
  @Output() catChange = new EventEmitter<string>();

  constructor(private router: Router, private cardnumService: CardnumService) {}

  GoToSol(): void {
    this.router.navigate(['/solutions'], { queryParams: { numero: '0', awnsered: 'false' } });
  }
  // Method to increment card number
  ChangeCard() {
    if (this.avance && this.currentNumber < navigation_data.data.length) {
      this.currentNumber += 1; // Increase current number by 1
      if (this.currentNumber != navigation_data.data.length) {
      this.cat = navigation_data.data[this.currentNumber]?.categorie; }
      this.router.navigate(['/cartes_inclusif/carte'], {
        queryParams: { id: this.currentNumber } // Use query parameter 'id' to pass current number
      });
      this.cardChange.emit(this.currentNumber);
      this.catChange.emit(this.cat);
      } 
      else if (!this.avance && this.currentNumber > 0) {
      this.currentNumber -= 1; // Decrease current number by 1
      this.cat = navigation_data.data[this.currentNumber]?.categorie; 
      this.router.navigate(['/cartes_inclusif/carte'], {
        queryParams: { id: this.currentNumber } // Use query parameter 'id' to pass current number
      });
      this.cardChange.emit(this.currentNumber);
      this.catChange.emit(this.cat);
    }

    // Emit updated values to parent component

  }
}
