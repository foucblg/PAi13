import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { navigation_data2 } from '../../app.component';
import {Router } from '@angular/router';

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigbutton.component.html',
  styleUrls: ['./navigbutton.component.css']
})
export class NavigbuttonComponent {
  constructor(private router:Router) {}
  applyFilters(): void {
    this.router.navigate(['/solutions'], { queryParams: { numero: '0', awnsered: 'false' } });
  }
  @Input() avance!: boolean;
  @Input() currentNumber: number = 0 // Input to control navigation
  @Input() cat!: string
  @Output() cardChange = new EventEmitter<number>(); // Output to emit card changes
  @Output() catChange = new EventEmitter<string>();

  updateQueryParams(): void {
    this.router.navigate([], {
      queryParams: { numero: ''+this.currentNumber, awnsered:'false' },
      queryParamsHandling: 'merge', // Merge avec les paramètres existants
      skipLocationChange: false // Mettre à jour l'URL dans la barre d'adresse
    });
  }
  // Method to increment card number
  ChangeCard() {
    if (this.avance && this.currentNumber<10) {
      this.currentNumber += 1;
      this.cat = navigation_data2.data[this.currentNumber]?.categorie;
      this.updateQueryParams();
    } else if (!this.avance && this.currentNumber >= 1 ) {
      this.currentNumber -= 1;
      this.cat = navigation_data2.data[this.currentNumber]?.categorie;
      this.updateQueryParams();
      }
      else if(!this.avance){
        this.router.navigate(['../quizz'])
      }
      else{
        this.cat = navigation_data2.data[this.currentNumber]?.categorie;
      }

    this.cardChange.emit(this.currentNumber); // Emit updated card number to parent
    this.catChange.emit(this.cat);
  }

}
