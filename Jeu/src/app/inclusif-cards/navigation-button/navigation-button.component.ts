import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { navigation_data } from '../../app.component';
@Component({
  selector: 'app-navigation-button-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.css']
})
export class NavigationButtonComponent {
  @Input() carte_suivante!: boolean;
  @Input() currentNumber: number = 0; // Input to control navigation
  @Input() cat!: string;
  @Output() cardChange = new EventEmitter<number>(); // Output to emit card changes
  @Output() catChange = new EventEmitter<string>();

  constructor(private router: Router) {}

  GoToSol(): void {
    this.router.navigate(['/solutions'], { queryParams: { numero: '0', answered: 'false' } });
  }
  // Method to increment card number
  ChangeCard() {
    if (this.carte_suivante && this.currentNumber < navigation_data.data.length-1) {
      this.currentNumber += 1; // Increase current number by 1
      if (this.currentNumber != navigation_data.data.length) {
      this.cat = navigation_data.data[this.currentNumber]?.categorie; }
      this.router.navigate(['cartes_inclusif', "carte"], {
        queryParams: { id: this.currentNumber } // Use query parameter 'id' to pass current number
      });
      this.cardChange.emit(this.currentNumber);
      this.catChange.emit(this.cat);
      } 
      else if (!this.carte_suivante && this.currentNumber > 0) {
      this.currentNumber -= 1; // Decrease current number by 1
      this.cat = navigation_data.data[this.currentNumber]?.categorie; 
      this.router.navigate(['cartes_inclusif', "carte"], {
        queryParams: { id: this.currentNumber } // Use query parameter 'id' to pass current number
      });
    }
      else if (this.carte_suivante) {
        this.GoToSol();
      }
      this.cardChange.emit(this.currentNumber);
      this.catChange.emit(this.cat);
    }

    // Emit updated values to parent component

  }

