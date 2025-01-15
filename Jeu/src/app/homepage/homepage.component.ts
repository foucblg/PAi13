import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  standalone: true,
})
export class HomepageComponent {
  constructor(private router: Router) { }

  commencer() {
    this.router.navigate(['./contexte'])
  }

}
