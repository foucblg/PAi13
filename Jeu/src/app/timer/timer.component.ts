import { CommonModule } from '@angular/common';
import { Component, input, OnDestroy, OnInit, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class TimerComponent implements OnDestroy {
  timeInput = input<number>(3); // Temps écoulé en secondes
  time = signal(this.timeInput());
  private subscription: Subscription = new Subscription();

  start() {
    console.log("start")
    // Observable qui émet toutes les secondes
    const timer$ = interval(1000);

    // S'abonne pour incrémenter le temps
    this.subscription = timer$.subscribe(() => {
      this.time.update(t => t - 1);
      if (this.time() <= 0) {
        this.stop();
      }
    });
  }

  ngOnDestroy(): void {
    this.stop();
  }
  stop(): void {
    // Désabonnement pour éviter les fuites de mémoire
    if (this.subscription) {
      console.log("stop")
      this.subscription.unsubscribe();
    }
  }

  resetTimer(): void {
    console.log("reset")
    this.time.set(this.timeInput());
  }
}
