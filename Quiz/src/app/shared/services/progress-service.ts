import { computed, inject, Injectable, signal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "./quiz-service";
import { Answer } from "../types/enums";
@Injectable({
  providedIn: 'root'
})

export class ProgressService {
  router = inject(Router);
  route = inject(ActivatedRoute);
  dataService = inject(DataService);
  score = signal(0);
  questionNumber = signal(0);
  hasEnded = signal(false);
  answered = signal(false);
  theme = signal("");
  theme_id = signal(0);
  progressRatio = computed(() => this.questionNumber() / this.dataService.numberOfQuestions())

  goToBegining() {
    this.score.set(0);
    this.questionNumber.set(0);
    this.hasEnded.set(false);
    this.router.navigate(["quiz", "0"], { onSameUrlNavigation: 'ignore' });
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
      const quizSegment = this.dataService.getNewQuestionHash();
      if (typeof quizSegment[0] === "string" && typeof quizSegment[1] === "number") {
        console.log("ok")
        this.questionNumber.update(n => n + 1);
        this.answered.set(false);
        this.theme.set(quizSegment[0]);
        this.theme_id.set(+quizSegment[1])
        this.router.navigate(["quiz", this.questionNumber().toString()], {
          queryParams: { theme: quizSegment[0], theme_id: quizSegment[1], answered: false },
          replaceUrl: this.questionNumber() > 0,
        });

      } else {
        this.goToNext();
      }
    } else {
      this.goToEnd();
    }
  }

  answer(ans: Answer) {
    switch (ans) {
      case Answer.True:
        this.score.update(s => s + 1);
        break;

      case Answer.Empty:
        alert("Choisir au moins une réponse");
        return;
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
}
