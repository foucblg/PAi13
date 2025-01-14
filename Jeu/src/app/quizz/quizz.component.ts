import { Component } from '@angular/core';
import { NavigbuttonComponent } from "./navigbutton/navigbutton.component";
import { ThemeIndicatorComponent } from './theme-indicator/theme-indicator.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { navigation_data } from "../app.component";
import { NavigcardComponent } from "./navigcard/navigcard.component";


@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [NavigbuttonComponent, ThemeIndicatorComponent, NavigcardComponent],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css',
})

export class QuizzComponent {
  currentNumber = 0;
  cat = navigation_data.data[0]?.categorie;
  suivant = false;
}
