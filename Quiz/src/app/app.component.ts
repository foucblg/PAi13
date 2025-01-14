import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as data from '../assets/questions_final.json';

export interface QuizData {
  question_topics: string[],
  question_cycle: number[],
  questions: Record<string, QuizSegment[]>,
}

export interface QuizSegment {
  question_type: string,
  question: string,
  possible_answers: string[] | never[],
  true_answers: number[] | never[],
  explanation: string,
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
