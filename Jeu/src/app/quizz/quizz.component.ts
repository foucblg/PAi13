import { Component } from '@angular/core';
import { NavigbuttonComponent } from "./navigbutton/navigbutton.component";

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [NavigbuttonComponent],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {

}
