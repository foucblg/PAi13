import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})

export class ScoreService {
  score = 0;

  addToScore(n_points: number) {
    // 0 ou 1 pour l'instant
    this.score += n_points;
  }

}
