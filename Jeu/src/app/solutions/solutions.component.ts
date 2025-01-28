import { Component } from '@angular/core';
import { NavigbuttonComponent } from "./navigbutton/navigbutton.component";
import { ThemeIndicatorComponent } from './theme-indicator/theme-indicator.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { navigation_data2 } from "../app.component";
import { NavigcardComponent } from "./navigcard/navigcard.component";

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [NavigbuttonComponent, ThemeIndicatorComponent, NavigcardComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
  constructor(private router:Router) {}
    currentNumber = 0;
      cat = navigation_data2.data[0]?.categorie;
      suivant = false;
      applyFilters(): void {
        this.router.navigate(['/solutions'], { queryParams: { numero: '0', awnsered: 'false' } });
      }
}

