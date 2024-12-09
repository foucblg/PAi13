import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../quiz-service';
import { Question } from '../../app.component';


@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [],
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.css'
})
export class QuizCardComponent {
  question: Question | undefined;
  answered = false;
  quizSegment: any;
  theme: string = "";

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams['answered']) {
        this.answered = queryParams['answered'] === 'true';
      }
      if (queryParams['theme']) {
        this.theme = queryParams['theme'];
      }
      if (queryParams['theme_id']) {
        this.question = this.dataService.getSpecificQuestion(this.theme, +queryParams['theme_id']);
      }
    });
    console.log("dataservice : ");
    console.log(this.dataService);
  }
}
