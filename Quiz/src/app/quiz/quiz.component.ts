import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { DataService } from '../quiz-service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  imports: [RouterOutlet],
})

export class QuizComponent {
  questionNumber = 0;
  answered = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    console.log("is init")
    this.route.firstChild?.queryParams.subscribe(queryParams => {
      if (queryParams['answered']) {
        this.answered = queryParams['answered'] === 'true';
      }
    });
    this.route.firstChild?.params.subscribe(params => {
      if (params['id']) {
        console.log(+ params['id'])
        this.questionNumber = + params['id'];
      }
    })
  }

  start() {
    this.onNext();
  }
  onNext() {
    const quizSegment = this.dataService.getNewQuestionHash();
    //console.log("got quiz segment")
    this.questionNumber++;
    this.router.navigate([`/quiz/${this.questionNumber.toString()}`], {
      queryParams: { theme: quizSegment[0], theme_id: quizSegment[1], answered: false },
    });
  }
}
