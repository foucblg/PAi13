import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as data from '../assets/questions.json';
import { DataService } from './quiz-service';

export interface QuizData {
  question_topics: string[],
  question_cycle: number[],
  questions: Record<string, Question[]>,
}

export interface Question {
  question_type: string,
  question: string,
  choices: string[] | never[],
  answers: number[] | never[],
  explication: string,
  source: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'INCLUSIF: Le jeu';
  quizData = quizData;
}

export const quizData: QuizData = data;
