import { Component } from '@angular/core';
import { NavigbuttonComponent } from "./navigbutton/navigbutton.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [NavigbuttonComponent],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
  currentNumber=1;
  
}
