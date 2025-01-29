import { computed, inject, Injectable, signal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "./quiz-service";
import { Answer } from "../types/enums";
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class ProgressService {
  router = inject(Router);
  route = inject(ActivatedRoute);
  dataService = inject(DataService);
  score = signal(0);
  questionNumber = signal(0);
  currentAnswer = signal<number[]>([]);
  currentAnswerValidity = computed(() => this.verifyAnswer())
  hasEnded = signal(false);
  answered = signal(false);
  theme = signal("");
  theme_id = signal(0);
  progressRatio = computed(() => this.questionNumber() / this.dataService.numberOfQuestions() * 100)

  goToBegining() {
    this.score.set(0);
    this.questionNumber.set(0);
    this.hasEnded.set(false);
    this.router.navigate(["quiz", "accueil"], { onSameUrlNavigation: 'ignore' });
  }

  start(nQuestions: number) {
    this.questionNumber.set(0);
    this.hasEnded.set(false);
    this.dataService.startQuiz(nQuestions);
    this.goToNext();
  }

  goToEnd() {
    this.hasEnded.set(true);
    this.router.navigate(["quiz", "end"], { replaceUrl: true });
  }

  goToNext() {
    if (!this.dataService.isFinished()) {
      this.dataService.getNewQuestion();
      this.questionNumber.update(n => n + 1);
      this.answered.set(false);
      this.theme.set(this.dataService.current_topic());
      this.theme_id.set(this.dataService.current_question_id())
      this.router.navigate(["quiz", this.questionNumber().toString()], {
        queryParams: { theme: this.dataService.current_topic(), theme_id: this.dataService.current_question_id(), answered: false },
        replaceUrl: this.questionNumber() > 0,
      });
    } else {
      this.goToEnd();
    }
  }

  answer() {
    console.log(this.currentAnswer())
    if (this.currentAnswerValidity() === Answer.Empty) {
      return;
    }
    if (this.currentAnswerValidity() === Answer.True) {
      this.score.update(s => s + 1);
    }
    this.answered.set(true);
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { answered: true },
        queryParamsHandling: 'merge', // remove to replace all query params by provided
        replaceUrl: true,
      }
    );
  }
  verifyAnswer(): Answer {
    const realAnswers = this.dataService.current_segment()?.true_answers as number[];
    if (this.currentAnswer().length === 0) {
      return Answer.Empty;
    }
    if (this.currentAnswer().sort().toString() == realAnswers.sort().toString()) {
      return Answer.True;
    } else {
      return Answer.False;
    }
  }

}
